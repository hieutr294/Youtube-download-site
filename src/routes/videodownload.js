var express = require('express')
var router = express.Router()

const videoDownloadController = require('../controllers/VideoDownloadController')

router.use('/videodownload',videoDownloadController.mix)

module.exports = router