
    
   
const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');
const { validationResult }= require ("express-validator");

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



        // Generamos el nuevo producto
        let user = req.body;

        if (req.file) {
            user.image = req.file.filename;
        } else {
            //res.send('La imagen es obligatoria');
            //default_img = path.join(__dirname, '../../public/images/products/default.png');
            default_img = ('userdefault.png')
            user.image = default_img;
        }
        
        let userId = usersTable.create(user);
        
        res.redirect('users/userDetail/' + userId);
    },
    login: (req,res)=>{
        res.render("users/login");
    },
    userDetail: (req, res) => {
        let user = usersTable.find(req.params.id);

        if ( user ) {
            res.render('users/userDetail', { user });
        } else {
            res.send('No encontré el usuario');
        }
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