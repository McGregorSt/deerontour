const { test } = require('node:test')
const assert = require('node:assert/strict')

const { createRateLimiter } = require('../util/rateLimiter')

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

test('limits repeated requests by IP without blocking other clients', () => {
  const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 })
  let nextCalls = 0
  const firstIp = { ip: '192.0.2.1' }
  const secondIp = { ip: '192.0.2.2' }

  for (let count = 0; count < 2; count += 1) {
    limiter(firstIp, createResponse(), () => {
      nextCalls += 1
    })
  }

  const blockedResponse = createResponse()
  limiter(firstIp, blockedResponse, () => {
    nextCalls += 1
  })
  limiter(secondIp, createResponse(), () => {
    nextCalls += 1
  })

  assert.equal(blockedResponse.statusCode, 429)
  assert.equal(nextCalls, 3)
})
