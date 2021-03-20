function loginMiddleare (req, res, next){
    if(req.session.userLogged){
        return res.redirect ("../users/userDetail")
    }
    next()
}

module.exports = loginMiddleare;