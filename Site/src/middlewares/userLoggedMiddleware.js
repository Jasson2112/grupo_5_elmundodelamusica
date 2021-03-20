const jsonTable = require('../models/jsonTable');
const user = jsonTable('users');

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie= req.cookies.email
    let userFromCookie= user.findByField("email", emailInCookie)

    if (userFromCookie){
        req.session.userLogged= userFromCookie
    }
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged= req.session.userLogged;
        
    }



    next();
}

module.exports = userLoggedMiddleware