const fs = require('fs');
const path = require('path');


const { validationResult }= require ("express-validator");
const bcrypt = require ("bcryptjs")
const db = require ("../database/models")


module.exports = {
    users: async (req, res) => {
        let users = await db.Users.findAll()

        res.render('users/users', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    userCreate: (req, res) => {
        res.render('users/register');
    },
    userRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        

        let userInDb = await db.Users.findOne({
            where:{email: req.body.email}
        });

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
        const {
            first_name,
            last_name,
            email,
            password,
            address,
            tel,
            id_category
        } = req.body;

        
        if (req.file) {
            let image = req.file.filename;
        } else {
            //res.send('La imagen es obligatoria');
            //default_img = path.join(__dirname, '../../public/images/products/default.png');
            default_img = ('userdefault.png')
            let image = default_img;
        }


        await db.Users.create({
            first_name,
            last_name,
            email,
            password : bcryptjs.hashSync(req.body.password, 10),
            address,
            tel,
            image,
            id_category

        })    
        res.redirect('users/login');
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
    userEdit: async (req, res) => {
        let user = await db.Users.findOne({
            where: {
              user_id: req.params.id,
            },
          });
      
        res.render('users/userEdit', { user });        
    },

    update: async (req, res) => {
        const {id} = req.params.id
        const {
            first_name,
            last_name,
            email,
            password,
            address,
            tel,
            id_category
        } = req.body;

        
        if (req.file) {
            let image = req.file.filename;
        } else {
            //res.send('La imagen es obligatoria');
            //default_img = path.join(__dirname, '../../public/images/products/default.png');
            default_img = ('userdefault.png')
            let image = default_img;
        }


        await db.Users.update({
            first_name,
            last_name,
            email,
            password : bcryptjs.hashSync(req.body.password, 10),
            address,
            tel,
            image,
            id_category
        },
        {
            where: { id: user_id },
        })   

        res.redirect('userDetail/' + id);;
    },

    destroy: async (req, res) => {
        let userDelete = req.params.id;

        await db.Users.destroy({
          where: { user_id: userDelete },
        });

        res.redirect('/users');
    },


}