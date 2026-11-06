const { DataTypes } = require('sequelize')
const sequelize = require('../util/database')

const NewsletterSubscriber = sequelize.define(
  'NewsletterSubscriber',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        isIn: [['pending', 'active', 'unsubscribed']],
      },
    },
    confirmationTokenHash: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    confirmedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    unsubscribedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'newsletter_subscribers',
    timestamps: true,
    underscored: true,
  },
)

module.exports = NewsletterSubscriber
