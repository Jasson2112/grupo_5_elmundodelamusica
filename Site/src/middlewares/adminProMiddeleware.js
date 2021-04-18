function adminProMiddleware (req, res, next){
    console.log(req.session.userLogged)
    if(!req.session.userLogged){
        return res.redirect ("../")
    }
    if(req.session.userLogged.id_category != 1){
        return res.redirect ("../")
    }
    next()
}

module.exports = adminProMiddleware;