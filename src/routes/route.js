const homepage = require('./homepage')
const resultpage = require('./resultpage')

function route(app){

    app.post('/result',resultpage)
    app.use('/',homepage)
    
}

module.exports = route