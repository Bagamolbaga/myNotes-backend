const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupController')

router.post('/', groupController.create)
router.get('/', groupController.get)

module.exports = router

