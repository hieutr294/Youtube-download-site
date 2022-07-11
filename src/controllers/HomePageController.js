class HomePageController{

    homePage(req, res){
        res.render('homepage')
    }
    
}

module.exports = new HomePageController