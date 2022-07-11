const ytdl = require('ytdl-core');

async function getInfoVideo(link){
    let videoInfo = await ytdl.getInfo(link)
    let audioFormats = ytdl.filterFormats(videoInfo.formats,'audioonly')
    let videoFormats = ytdl.filterFormats(videoInfo.formats,'videoonly')
    return {video:videoFormats,audio:audioFormats}
}

module.exports = getInfoVideo