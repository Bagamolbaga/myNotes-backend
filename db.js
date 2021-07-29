const { Sequelize } = require('sequelize')

const env = process.env.NODE_ENV || 'development'

const devUrl = `postgres://postgres:lehabaga@localhost:5432/my_notes`

const prodUrl = `${process.env.DATABASE_URL}?sslmode=require`

module.exports = new Sequelize(env !== 'development' ? prodUrl : devUrl)