const {User} = require('../models/models')

const UserController = {
    registration: async (req, res) => {
        const {name, password} = req.body
        const user = await User.create({name, password})
        return res.json(user)
    },

    login: async (req, res) => {

    },

    auth: async (req, res) => {
        const users = await User.findAll()
        res.json({users})
    }
}

module.exports = UserController