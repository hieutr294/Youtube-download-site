var express = require('express')
var router = express.Router()
const homePageController = require('../controllers/HomePageController')

router.use('/', homePageController.homePage)

module.exports = router