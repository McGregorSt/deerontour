const { afterEach, test } = require('node:test')
const assert = require('node:assert/strict')

const Post = require('../models/post')
const blogController = require('../controllers/blog')

const originalFindAll = Post.findAll

afterEach(() => {
  Post.findAll = originalFindAll
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

test('getPosts filters country case-insensitively and sorts newest first', async () => {
  let query
  Post.findAll = (options) => {
    query = options
    return Promise.resolve([])
  }

  const response = createResponse()
  blogController.getPosts(
    { query: { country: '  Vietnam  ' } },
    response,
    assert.fail,
  )

  await new Promise((resolve) => setImmediate(resolve))

  assert.equal(query.where.logic, 'vietnam')
  assert.equal(query.where.attribute.fn, 'LOWER')
  assert.deepEqual(query.order, [['createdAt', 'DESC']])
  assert.equal(response.statusCode, 200)
  assert.deepEqual(response.body, { posts: [] })
})

test('getPosts omits the country filter when country is not provided', async () => {
  let query
  Post.findAll = (options) => {
    query = options
    return Promise.resolve([])
  }

  const response = createResponse()
  blogController.getPosts({ query: {} }, response, assert.fail)

  await new Promise((resolve) => setImmediate(resolve))

  assert.equal(Object.hasOwn(query, 'where'), false)
  assert.deepEqual(query.order, [['createdAt', 'DESC']])
  assert.equal(response.statusCode, 200)
})

test('getPosts rejects non-string or blank country values', () => {
  const response = createResponse()

  blogController.getPosts({ query: { country: ['Vietnam', 'Poland'] } }, response, assert.fail)

  assert.equal(response.statusCode, 400)
  assert.equal(response.body.message, 'Parametr country musi być nazwą kraju')
})
