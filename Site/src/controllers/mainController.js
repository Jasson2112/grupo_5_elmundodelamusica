const fs = require('fs');
const path = require('path');
const jsonTable = require('../models/jsonTable');
const productsTable = jsonTable('products');
const db = require ("../database/models")


module.exports={
    
    home: (req,res)=>{
        db.product.findAll()
        db.Product_cat.findAll()
            .then(function(products){
                return res.render('home', { 
                    title: 'Listado de productos', 
                    products,
                    product_category       
                })
            })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
    }

}
