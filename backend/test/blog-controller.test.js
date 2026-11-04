const { afterEach, test } = require('node:test')
const assert = require('node:assert/strict')

const Post = require('../models/post')
const PostTranslation = require('../models/postTranslation')
const sequelize = require('../util/database')
const blogController = require('../controllers/blog')

const originalFindAll = Post.findAll
const originalCreate = Post.create
const originalBulkCreate = PostTranslation.bulkCreate
const originalTransaction = sequelize.transaction

afterEach(() => {
  Post.findAll = originalFindAll
  Post.create = originalCreate
  PostTranslation.bulkCreate = originalBulkCreate
  sequelize.transaction = originalTransaction
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

test('getPostByCountry filters country case-insensitively and sorts newest first', async () => {
  let query
  Post.findAll = (options) => {
    query = options
    return Promise.resolve([])
  }

  const response = createResponse()
  blogController.getPostByCountry(
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

test('getPostByCountry omits the country filter when country is not provided', async () => {
  let query
  Post.findAll = (options) => {
    query = options
    return Promise.resolve([])
  }

  const response = createResponse()
  blogController.getPostByCountry({ query: {} }, response, assert.fail)

  await new Promise((resolve) => setImmediate(resolve))

  assert.equal(Object.hasOwn(query, 'where'), false)
  assert.deepEqual(query.order, [['createdAt', 'DESC']])
  assert.equal(response.statusCode, 200)
})

test('getPostByCountry rejects non-string or blank country values', () => {
  const response = createResponse()

  blogController.getPostByCountry(
    { query: { country: ['Vietnam', 'Poland'] } },
    response,
    assert.fail,
  )

  assert.equal(response.statusCode, 400)
  assert.equal(response.body.message, 'Parametr country musi być nazwą kraju')
})

test('getPosts remains available for the existing posts endpoint', async () => {
  let query
  Post.findAll = (options) => {
    query = options
    return Promise.resolve([])
  }

  const response = createResponse()
  blogController.getPosts({ query: {} }, response, assert.fail)

  await new Promise((resolve) => setImmediate(resolve))

  assert.equal(typeof blogController.getPosts, 'function')
  assert.equal(Object.hasOwn(query, 'where'), false)
  assert.deepEqual(query.order, [['createdAt', 'DESC']])
  assert.equal(response.statusCode, 200)
})

test('createPost saves mapData coordinates', async () => {
  let createdPost
  Post.create = (postData) => {
    createdPost = postData
    return Promise.resolve({ id: 'post-id' })
  }
  PostTranslation.bulkCreate = () => Promise.resolve([])
  sequelize.transaction = (callback) => callback({})

  const response = createResponse()
  blogController.createPost(
    {
      body: {
        mapData: { x: 19.94, y: 50.06 },
        translations: {
          EN: { title: 'Title', countryLabel: 'Country' },
          PL: { title: 'Tytuł', countryLabel: 'Kraj' },
        },
      },
    },
    response,
    assert.fail,
  )

  await new Promise((resolve) => setImmediate(resolve))

  assert.deepEqual(createdPost.mapData, { x: 19.94, y: 50.06 })
  assert.equal(response.statusCode, 201)
})

test('createPost rejects mapData without numeric x and y coordinates', () => {
  const response = createResponse()
  blogController.createPost(
    {
      body: {
        mapData: { x: '19.94', y: 50.06 },
      },
    },
    response,
    assert.fail,
  )

  assert.equal(response.statusCode, 400)
  assert.match(response.body.message, /mapData/)
})
