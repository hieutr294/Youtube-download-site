const videoDownload = require('../models/videoDownload')

class VideoDownloadController{

    mix(req, res){
        res.header("Content-Disposition", 'attachment;  filename='+encodeURI(`${req.query.title}.mp4`))
        videoDownload(req.query.videoitag,req.query.id).pipe(res)
    }
    
}

module.exports = new VideoDownloadController