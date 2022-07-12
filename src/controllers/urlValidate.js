const ytdl = require('ytdl-core');

function urlValidate(url){
    return ytdl.validateURL(url)
}

module.exports = urlValidate