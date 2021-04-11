
const db = require ("../database/models")



async function userLoggedMiddleware (req, res, next) {
    console.clear()
    res.locals.isLogged = false;

    let emailInCookie= "";
    let userFromCookie= "";

    if (req.cookies.email){
        emailInCookie= req.cookies.email
        userFromCookie= await db.Users.findOne({
            where: {
              email: emailInCookie
            },
          })

    }
    
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