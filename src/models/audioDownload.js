const ytdl = require('ytdl-core');
const stream = require('stream')

function audioDownload(id){
    const result = new stream.PassThrough({highWaterMark: 2 * 1024 * 1024});

    ytdl.getInfo(id).then(info=>{
        let audioStream = ytdl.downloadFromInfo(info, {quality:'highestaudio'});
        audioStream.pipe(result);
    })

    return result
}

module.exports = audioDownload