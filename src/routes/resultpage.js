var express = require('express')
var router = express.Router()

const resultPageController = require('../controllers/ResultPageController')

router.use('/result',resultPageController.resultPageMiddleWare, resultPageController.resultPage)

module.exports = router