const createRateLimiter = ({ limit, windowMs }) => {
  const requestsByIp = new Map()

  const cleanup = setInterval(() => {
    const now = Date.now()
    for (const [ip, entry] of requestsByIp) {
      if (entry.expiresAt <= now) requestsByIp.delete(ip)
    }
  }, windowMs)
  cleanup.unref()

  return (req, res, next) => {
    const now = Date.now()
    const ip = req.ip || req.socket.remoteAddress
    let entry = requestsByIp.get(ip)

    if (!entry || entry.expiresAt <= now) {
      entry = { count: 0, expiresAt: now + windowMs }
      requestsByIp.set(ip, entry)
    }

    if (entry.count >= limit) {
      return res.status(429).json({
        message: 'Zbyt wiele prób. Spróbuj ponownie później.',
      })
    }

    entry.count += 1
    return next()
  }
}

module.exports = { createRateLimiter }
