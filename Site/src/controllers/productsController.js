const fs = require('fs');
const path = require('path');
const jsonTable = require('../models/jsonTable');
const productsTable = jsonTable('products');
const db = require ("../database/models")

module.exports = {
    products: (req, res) => {
        let products = db.product.findAll()
            .then(function(products){
                return res.render('products/products', { 
                    title: 'Listado de productos', 
                    products       
                })
            })
    },

    productCreate: (req, res) => {
        res.render('products/productCreate');
    },
    productStore: (req, res) => {
        // Generamos el nuevo producto
        db.product.create({
            name: req.body.name,
            desciption: req.body.desciption,
            price: req.body.price,
            discount: req.body.discount,
            id_category: req.body.Product_cat,
            id_brand: req.body.Product_bra,
            Function (){
                if (req.file) {
                 image = req.file.filename;
                } else {
                //res.send('La imagen es obligatoria');
                //default_img = path.join(__dirname, '../../public/images/products/default.png');
                default_img = ('default.png')
                image= default_img;
                 }
             }
        
        })

    .then(product => {
        res.redirect('products/productDetail/' + db.product.product_id)
    
    })
},

    productDetail: (req, res) => {
        let product = productsTable.find(req.params.id);

        if ( product ) {
            res.render('products/productDetail', { product });
        } else {
            res.send('No encontré el producto');
        }
    },
    productEdit: (req, res) => {
        let product = productsTable.find(req.params.id);

        res.render('products/productEdit', { product });
    },
    update: (req, res) => {
        let product = req.body;
        product.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            product.image = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldProduct = productsTable.find(product.id);
            product.image = oldProduct.image;
        }

        let productId = productsTable.update(product);

        res.redirect('productDetail/' + productId);
    },
    destroy: (req, res) => {
        let products = productsTable.all()

        productsTable.delete(req.params.id);

        res.redirect('/');
    },
    productCart: (req,res)=>{
        res.render("products/productCart");
    },
    tutorial: (req,res)=>{
        res.render("products/tutorial");
    }

}