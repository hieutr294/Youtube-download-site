const homepage = require('./homepage')
const resultpage = require('./resultpage')
const videodownload = require('./videodownload')
const audiodownload = require('./audiodownload')

function route(app){
    app.get('/audiodownload',audiodownload)
    app.get('/videodownload',videodownload)
    app.post('/result',resultpage)
    app.use('/',homepage)
    
}

module.exports = route