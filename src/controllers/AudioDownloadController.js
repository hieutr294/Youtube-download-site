const audioDownload = require('../models/audioDownload')

class VideoDownloadController{

    mix(req, res){
        res.header("Content-Disposition", 'attachment;  filename='+encodeURI(`${req.query.title}.mp3`))
        
        audioDownload(req.query.id).pipe(res)
    }
    
}


module.exports = new VideoDownloadController