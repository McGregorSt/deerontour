const { UniqueConstraintError } = require('sequelize')
const sequelize = require('../util/database')
const NewsletterSubscriber = require('../models/newsletterSubscriber')

const isValidEmail = (email) =>
  email.length <= 255 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const findSubscriber = (email) =>
  NewsletterSubscriber.findOne({
    where: sequelize.where(
      sequelize.fn('LOWER', sequelize.col('email')),
      email,
    ),
  })

const resetUnsubscribedSubscriber = async (subscriber) => {
  if (subscriber.status !== 'unsubscribed') return

  await subscriber.update({
    status: 'pending',
    confirmationTokenHash: null,
    confirmedAt: null,
    unsubscribedAt: null,
  })
}

exports.subscribe = async (req, res) => {
  const rawEmail = req.body && req.body.email
  if (typeof rawEmail !== 'string') {
    return res.status(400).json({ message: 'Podaj prawidłowy adres e-mail' })
  }

  const email = rawEmail.trim().toLowerCase()
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Podaj prawidłowy adres e-mail' })
  }

  try {
    const existingSubscriber = await findSubscriber(email)
    if (existingSubscriber) {
      await resetUnsubscribedSubscriber(existingSubscriber)
      return res.status(200).json({ message: 'Żądanie zostało przyjęte' })
    }

    await NewsletterSubscriber.create({
      email,
      status: 'pending',
    })
    return res.status(201).json({ message: 'Żądanie zostało przyjęte' })
  } catch (error) {
    if (
      error instanceof UniqueConstraintError ||
      (error && error.name === 'SequelizeUniqueConstraintError')
    ) {
      try {
        const existingSubscriber = await findSubscriber(email)
        if (existingSubscriber) {
          await resetUnsubscribedSubscriber(existingSubscriber)
          return res.status(200).json({ message: 'Żądanie zostało przyjęte' })
        }
      } catch {
        console.error('Newsletter subscription recovery failed')
        return res.status(500).json({ message: 'Wystąpił błąd serwera' })
      }
    }

    console.error('Newsletter subscription failed')
    return res.status(500).json({ message: 'Wystąpił błąd serwera' })
  }
}
