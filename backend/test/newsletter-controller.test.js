const { afterEach, test } = require('node:test')
const assert = require('node:assert/strict')

const NewsletterSubscriber = require('../models/newsletterSubscriber')
const sequelize = require('../util/database')
const newsletterController = require('../controllers/newsletter')

const originalFindOne = NewsletterSubscriber.findOne
const originalCreate = NewsletterSubscriber.create
const originalWhere = sequelize.where
const originalFn = sequelize.fn
const originalCol = sequelize.col

afterEach(() => {
  NewsletterSubscriber.findOne = originalFindOne
  NewsletterSubscriber.create = originalCreate
  sequelize.where = originalWhere
  sequelize.fn = originalFn
  sequelize.col = originalCol
})

const createResponse = () => ({
  statusCode: null,
  body: null,
  status(statusCode) {
    this.statusCode = statusCode
    return this
  },
  json(body) {
    this.body = body
    return this
  },
})

const stubCaseInsensitiveLookup = (lookup) => {
  sequelize.where = (...args) => ({ args })
  sequelize.fn = (...args) => ({ fn: args })
  sequelize.col = (column) => ({ column })
  NewsletterSubscriber.findOne = (query) => {
    assert.deepEqual(query.where.args, [
      { fn: ['LOWER', { column: 'email' }] },
      lookup,
    ])
    return Promise.resolve(null)
  }
}

test('creates a normalized pending subscriber', async () => {
  let created
  stubCaseInsensitiveLookup('user@example.com')
  NewsletterSubscriber.create = (attributes) => {
    created = attributes
    return Promise.resolve(attributes)
  }

  const response = createResponse()
  await newsletterController.subscribe(
    { body: { email: '  USER@Example.COM  ' } },
    response,
  )

  assert.deepEqual(created, { email: 'user@example.com', status: 'pending' })
  assert.equal(response.statusCode, 201)
  assert.deepEqual(response.body, { message: 'Żądanie zostało przyjęte' })
})

for (const status of ['active', 'pending']) {
  test(`does not create a duplicate ${status} subscriber`, async () => {
    let createCalled = false
    const subscriber = { status }
    NewsletterSubscriber.findOne = () => Promise.resolve(subscriber)
    NewsletterSubscriber.create = () => {
      createCalled = true
    }

    const response = createResponse()
    await newsletterController.subscribe(
      { body: { email: 'user@example.com' } },
      response,
    )

    assert.equal(createCalled, false)
    assert.equal(response.statusCode, 200)
  })
}

test('resets an unsubscribed subscriber for double opt-in', async () => {
  let update
  const subscriber = {
    status: 'unsubscribed',
    update: async (attributes) => {
      update = attributes
    },
  }
  NewsletterSubscriber.findOne = () => Promise.resolve(subscriber)

  const response = createResponse()
  await newsletterController.subscribe(
    { body: { email: 'user@example.com' } },
    response,
  )

  assert.deepEqual(update, {
    status: 'pending',
    confirmationTokenHash: null,
    confirmedAt: null,
    unsubscribedAt: null,
  })
  assert.equal(response.statusCode, 200)
})

for (const body of [
  {},
  { email: '' },
  { email: '   ' },
  { email: 'not-an-email' },
  { email: 'user@example.com'.repeat(20) },
  { email: ['user@example.com'] },
]) {
  test(`rejects invalid email input (${JSON.stringify(body)})`, async () => {
    let databaseCalled = false
    NewsletterSubscriber.findOne = () => {
      databaseCalled = true
    }

    const response = createResponse()
    await newsletterController.subscribe({ body }, response)

    assert.equal(databaseCalled, false)
    assert.equal(response.statusCode, 400)
  })
}

test('handles concurrent duplicate creates through the unique database index', async () => {
  const subscribers = new Map()
  let findCalls = 0
  sequelize.where = (...args) => ({ args })
  sequelize.fn = (...args) => ({ fn: args })
  sequelize.col = (column) => ({ column })
  NewsletterSubscriber.findOne = () => {
    findCalls += 1
    return Promise.resolve(findCalls <= 2 ? null : subscribers.get('user@example.com'))
  }
  NewsletterSubscriber.create = async (attributes) => {
    if (subscribers.has(attributes.email)) {
      const error = new Error('duplicate key')
      error.name = 'SequelizeUniqueConstraintError'
      throw error
    }
    const subscriber = { ...attributes }
    subscribers.set(attributes.email, subscriber)
    return subscriber
  }

  const responses = [createResponse(), createResponse()]
  await Promise.all(
    responses.map((response) =>
      newsletterController.subscribe(
        { body: { email: 'USER@example.com' } },
        response,
      ),
    ),
  )

  assert.equal(subscribers.size, 1)
  assert.deepEqual(
    responses.map((response) => response.statusCode).sort(),
    [200, 201],
  )
})
