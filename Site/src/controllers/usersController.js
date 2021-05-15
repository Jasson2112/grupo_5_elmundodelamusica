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


        
        console.log(req.body.category)
        
        // const Validation = validationResult(req.body)
        // console.log(Validation)
        const resultValidation = validationResult(req);
        console.log(resultValidation)

        // if (Validation.errors.length > 0){
        //     console.log(req.body)
        //     return res.render("users/register", {
        //         errors: Validation.mapped(),
        //         oldData: req.body
        //     })
        // }

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
                console.log(userInDb)
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

        

        


        // Generamos el nuevo producto

        let imagen = (req.file) ? req.file.filename : "userDefault.png";
        let pass = bcrypt.hashSync(req.body.password, 10)
        console.log(pass)
        // if (req.file) {
        //     var image = req.file.filename;
        // } else {
        //     //res.send('La imagen es obligatoria');
        //     //default_img = path.join(__dirname, '../../public/images/products/default.png');
        //     default_img = ('userdefault.png')
        //     var image = default_img;
        // }
        
        
        console.log(req.body)

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


        
                // db.Users.findByPk(req.params.id , {include: [{association: "userCategory"}]})
                //   .then((user) => {
                //       if ( user ) {
                //           res.render('users/userEdit/', {user});
                //       } else {
                //           res.send('No encontré el usuario');
                //       }           
                //   })
                //   .catch((error) => {
                //       console.log(error);
                //       res.send("Ha ocurrido un error");
                //   }); 
                        
              
       
    },

    update: function (req,res) {
        let imagen = (req.file) ? req.file.filename : "userDefault.png";

        const resultValidation = validationResult(req);
        console.log(resultValidation)
        
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
            }           
            )
            
            

            

           
            // res.clearCookie("email");
            // req.session.destroy()
            // res.redirect('../users/login')

          })
          .catch(error => console.log("Falló el acceso a la DB o la edición del usuario", error))
        }

        db.Users.findByPk(req.session.userLogged.user_id, {include: [{association: "userCategory"}]})
            .then(function(user){
                res.clearCookie()
                req.session.userLogged=user
                res.redirect('../users/userDetail')
                console.log(user)
            })
            
    // async (req, res) => {
    //     const {id} = req.params.id
    //     const {
    //         first_name,
    //         last_name,
    //         email,
    //         password,
    //         address,
    //         tel,
    //         id_category
    //     } = req.body;

        
    //     if (req.file) {
    //         let image = req.file.filename;
    //     } else {
    //         //res.send('La imagen es obligatoria');
    //         //default_img = path.join(__dirname, '../../public/images/products/default.png');
    //         default_img = ('userdefault.png')
    //         let image = default_img;
    //     }


    //     await db.Users.update({
    //         first_name,
    //         last_name,
    //         email,
    //         password : bcrypt.hashSync(req.body.password, 10),
    //         address,
    //         tel,
    //         image,
    //         id_category
    //     },
    //     {
    //         where: { id: user_id },
    //     })   

    //     res.redirect('userDetail/' + id);;
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