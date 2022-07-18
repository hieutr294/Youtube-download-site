const ytdl = require('ytdl-core');

async function getInfoVideo(link){
    let videoInfo = await ytdl.getInfo(link)
    let audioFormats = ytdl.chooseFormat(videoInfo.formats, {quality:'highestaudio'});
    let tempVideoFormat = ytdl.filterFormats(videoInfo.formats,'videoonly')
    let filterMp4 = tempVideoFormat.filter(val=>{
        return val.container == 'mp4'
    })

    return {video:filterMp4,audio:audioFormats,iframeUrl:videoInfo.videoDetails.embed.iframeUrl,id:link,title:videoInfo.videoDetails.title,audioSize:audioFormats.contentLength}
}

module.exports = getInfoVideo