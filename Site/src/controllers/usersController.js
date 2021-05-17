const fs = require('fs');
const path = require('path');


const { validationResult }= require ("express-validator");
const bcrypt = require ("bcryptjs")
const db = require ("../database/models");
const { Console } = require('console');



module.exports = {
    users: async (req, res) => {
        let users = await db.Users.findAll({include: [{association: "userCategory"}]})

        res.render('users/users', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    userCreate: (req, res) => {
        res.render('users/register');
    },
    userRegister: function (req, res) {


        
       
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        
        

        db.Users.findOne({include: [{association: "userCategory"}],
            where:{email: req.body.email}
        })

            .then(userInDb => {
                    if (userInDb){
                    return res.render ("users/register",{
                    errors: {
                        email:{
                            msg:"este mail ya está registrado"
                        }                
                    },
                    oldData: req.body
        
                });
                }
            })    

            .catch(error => {
                {console.log(error)}
            }); 

        let imagen = (req.file) ? req.file.filename : "userDefault.png";
        let pass = bcrypt.hashSync(req.body.password, 10)

  
        
        db.Users.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : pass,
            address : req.body.address,
            tel : req.body.tel,
            image : imagen,
            id_category : req.body.id_category

        })
        .then(newUser =>{
            res.redirect('users/login');
        }) 
        .catch(error => {
            console.log(error);
        });    
        
    },
    login: (req,res)=>{
        res.render("users/login");
    },

    loginProcess:(req,res)=>{
        db.Users.findOne({
            where: {
              email: req.body.email,
            },
        })
       
        .then((userToLogin) =>{
            
            if(userToLogin){
                let isOkPassword = bcrypt.compareSync (req.body.password, userToLogin.password);
               
                if (isOkPassword){
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
    
                    if(req.body.remember_user){
                        res.cookie("email", req.body.email, {maxAge: (1000*60) * 2})
                    }
    
    
                    return res.redirect("../users/userDetail")
                }else{
                    return res.render("users/login",{
                        errors: {
                            email:{
                                msg: "Credenciales incorrectas"
                            }
                             
                        }
                        })
                }
    
            }
            return res.render("users/login",{
            errors: {
                email:{
                    msg: "Email no registrado"
                }
                 
            }
            })   


        })

        .catch((error) => {
            res.send("Usuario no Registrado");
        });       
    },

    logout: (req,res)=>{
        res.clearCookie("email");
        req.session.destroy()
        return res.redirect("/")
    },


    userDetail: (req, res) => {
          
        res.render('users/userDetail' , {
            user: req.session.userLogged
        })
        
    },
    userEdit: (req, res) => {
        db.Users.findByPk(req.params.id, {include: [{association: "userCategory"}]})
          .then(function(user) {
            return res.render('users/userEdit', { user })
          })
          .catch(error => console.log("Falló el acceso a la DB o la edición del usuario", error))
    
       
    },

    update: function (req,res) {
        let imagen = (req.file) ? req.file.filename : req.body.oldImage;

        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            db.Users.findByPk(req.params.id, {include: [{association: "userCategory"}]})
            .then(function(user){
                    return res.render("users/userEdit", {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        user
                    })
                    .catch((errors) => {
                        console.log(errors);
                        res.send("Ha ocurrido un error");
                      });
            })
        } else {
        db.Users.findByPk(req.params.id)
          .then(function(user) {
            let pass = (req.body.password) ? bcrypt.hashSync(req.body.password, 10) : user.password;
            
            
            db.Users.update({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                password : pass,
                address : req.body.address,
                tel : req.body.tel,
                image : imagen,
                id_category : req.body.id_category
            },{
                where: {
                    user_id: req.params.id
                    }
            },        
            )       
            

            .then(function() {          
                db.Users.findByPk(req.session.userLogged.user_id, {include: [{association: "userCategory"}]})
                .then(function(userAct){
                    res.clearCookie()
                    delete userAct.password;
                    req.session.userLogged=userAct
                    res.redirect('../users/userDetail')
                })
            })
        })
        .catch(error => console.log("Falló el acceso a la DB o la edición del usuario", error))
    }
 },

    destroy: async (req, res) => {
        let userDelete = req.params.id;

        await db.Users.destroy({
          where: { user_id: userDelete },
        });
        if(req.session.userLogged.id_category != 1){
            res.clearCookie("email");
            req.session.destroy()
        }
        res.redirect('/users');
    },

    imageUser:(req, res) => {
        db.Users.findByPk(req.params.id, {include: [{association: "userCategory"}]})
          .then(function(user) {
            return res.render('users/imageUser', { user })
          })
          .catch(error => console.log("Falló el acceso a la DB o la edición del usuario", error))
        }


}