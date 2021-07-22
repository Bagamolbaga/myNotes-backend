const {Group} = require('../models/models')

const GroupController = {
    create: async (req, res) => {
        const {title, user_id} = req.body
        const group = await Group.create({title, user_id})
        return res.json(group)
    },

    get: async (req, res) => {
        const {user_id} = req.query
        const group = await Group.findAll({where: {user_id}})
        return res.json(group)
    }
}

module.exports = GroupController