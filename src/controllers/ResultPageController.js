const getAudio = require('./getAudio')
const urlValidate = require('./urlValidate')

class ResultPageController{

    resultPage(req, res){
        let link = req.body.link.slice(req.body.link.indexOf("v")+2,req.body.link.length)
        
        getAudio(link).then(values=>{
            res.render('result',{links:values})
        })
    }

    resultPageMiddleWare(req, res, next){
        if(urlValidate(req.body.link)){
            next()
        }else{
            res.send('<script>alert("Please enter correct youtube link"); window.location.href = "/"; </script>');
        }
    }
    
}

module.exports = new ResultPageController