const getAudio = require('./getAudio')

class ResultPageController{

    resultPage(req, res){
        let link = req.body.link.slice(req.body.link.indexOf("v")+2,req.body.link.length)
        
        getAudio(link).then(values=>{
            res.render('result',{links:values})
        })
    }

    resultPageMiddleWare(req, res, next){
        if(req.body.link.includes('https://www.youtube.com/watch?v=')){
            next()
        }else{
            res.send('<script>alert("Please enter correct youtube link"); window.location.href = "/"; </script>');
        }
    }
    
}

module.exports = new ResultPageController