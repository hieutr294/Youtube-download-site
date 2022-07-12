const ytdl = require('ytdl-core');

async function getInfoVideo(link){
    let videoInfo = await ytdl.getInfo(link)
    let audioFormats = ytdl.filterFormats(videoInfo.formats,'audioonly')
    let videoFormats = ytdl.filterFormats(videoInfo.formats,'videoandaudio')
    return {video:videoFormats,audio:audioFormats,iframeUrl:videoInfo.videoDetails.embed.iframeUrl}
}

module.exports = getInfoVideo