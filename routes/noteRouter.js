const Router = require('express')
const router = new Router()
const noteController = require('../controllers/noteController')

router.post('/', noteController.create)
router.get('/', noteController.get)
router.put('/', noteController.edit)
//router.get('/:id')

module.exports = router

