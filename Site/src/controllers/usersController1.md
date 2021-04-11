const fs = require('fs');
const path = require('path');
const jsonTable = require('../models/jsonTable');
const usersTable = jsonTable('users');
const { validationResult }= require ("express-validator");
const bcrypt = require ("bcryptjs")

module.exports = {
    users: (req, res) => {
        let users = usersTable.all()

        res.render('users/users', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    userCreate: (req, res) => {
        res.render('users/register');
    },
    userRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        

        let userInDb = usersTable.findByField("email", req.body.email);

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

        // Generamos el nuevo producto
        let user = req.body;
        user.password = bcrypt.hashSync (user.password , 10)
        

        if (req.file) {
            user.image = req.file.filename;
        } else {
            //res.send('La imagen es obligatoria');
            //default_img = path.join(__dirname, '../../public/images/products/default.png');
            default_img = ('userdefault.png')
            user.image = default_img;
        }
        
        let userId = usersTable.create(user);
        
        res.redirect('users/login');
    },
    login: (req,res)=>{
        res.render("users/login");
    },
    loginProcess:(req,res)=>{
        let userToLogin = usersTable.findByField("email", req.body.email)

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
        let user = usersTable.find(req.params.id);

        res.render('users/userEdit', { user });
    },
    update: (req, res) => {
        let user = req.body;
        user.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            user.image = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldUser = usersTable.find(user.id);
            user.image = oldUser.image;
        }

        let userId = usersTable.update(user);

        res.redirect('userDetail/' + userId);
    },
    destroy: (req, res) => {
        let users = usersTable.all()

        usersTable.delete(req.params.id);

        res.redirect('/users');
    },


}