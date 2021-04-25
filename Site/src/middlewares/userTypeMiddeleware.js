function userTypeMiddeleware (req, res, next){
    
    if(!req.session.userLogged){
        return res.redirect ("../../users/login")
    }
    if(req.session.userLogged.id_category != 1 && req.session.userLogged.user_id != req.params.id){
        return res.redirect ("../../users/userDetail")
    }

    next()
}

module.exports = userTypeMiddeleware;