const {Note} = require('../models/models')

const NoteController = {
    create: async (req, res) => {
        const {title, text, group_id, user_id} = req.body
        const note = await Note.create({title, text, user_id, group_id})
        return res.json(note)
    },

    get: async (req, res) => {
        const {user_id} = req.query
        const notes = await Note.findAll({where: {user_id}})
        return res.json(notes)
    },

    edit: async (req, res) => {
        const {note_id, newTitle, newText} = req.body
        const updatedNote = await Note.update(
            {
                title: newTitle,
                text: newText
            },
            {
                where: {id: note_id}
            }
        )
        return res.json(updatedNote)
    }
}

module.exports = NoteController