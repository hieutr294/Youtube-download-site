const ytdl = require('ytdl-core');
const cp = require('child_process')
const stream = require('stream')
const ffmpegPath = require('ffmpeg-static');

function videoDownload(videoItag,id){
    const result = new stream.PassThrough({highWaterMark: 2 * 1024 * 1024});

    ytdl.getInfo(id).then(info=>{
      let audioStream = ytdl.downloadFromInfo(info, {quality:'highestaudio'});
      let videoStream = ytdl.downloadFromInfo(info, {quality: videoItag});
      
      let ffmpegProcess = cp.spawn(ffmpegPath, [
        // supress non-crucial messages
        '-loglevel', '8', '-hide_banner',
        // input audio and video by pipe
        '-i', 'pipe:3', '-i', 'pipe:4',
        // map audio and video correspondingly
        '-map', '0:a', '-map', '1:v',
        // no need to change the codec
        '-c', 'copy',
        // output mp4 and pipe
        '-f', 'matroska', 'pipe:5'
      ], {
        // no popup window for Windows users
        windowsHide: true,
        stdio: [
            // silence stdin/out, forward stderr,
            'inherit', 'inherit', 'inherit',
            // and pipe audio, video, output
            'pipe', 'pipe', 'pipe'
        ]
      });
      audioStream.pipe(ffmpegProcess.stdio[3]);
      videoStream.pipe(ffmpegProcess.stdio[4]);
      ffmpegProcess.stdio[5].pipe(result);
    })
    return result
}

module.exports = videoDownload