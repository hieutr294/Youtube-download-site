var express = require('express')
var router = express.Router()

const audioDownloadController = require('../controllers/AudioDownloadController')

router.use('/audiodownload',audioDownloadController.mix)

module.exports = router