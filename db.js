const {Sequelize} = require('sequelize')

module.exports = new Sequelize(process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }

)