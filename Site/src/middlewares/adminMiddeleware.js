function adminMiddleware (req, res, next){
    
    if(!req.session.userLogged){
        return res.redirect ("../users/login")
    }
    if(req.session.userLogged.id_category != 1){
        return res.redirect ("../users/userDetail")
    }
    next()
}

module.exports = adminMiddleware;