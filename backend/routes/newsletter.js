const express = require('express')
const newsletterController = require('../controllers/newsletter')
const { createRateLimiter } = require('../util/rateLimiter')

const router = express.Router()
const subscribeRateLimit = createRateLimiter({
  limit: 5,
  windowMs: 15 * 60 * 1000,
})

router.post('/subscribe', subscribeRateLimit, newsletterController.subscribe)

module.exports = router
