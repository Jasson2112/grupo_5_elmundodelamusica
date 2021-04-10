const fs = require('fs');
const path = require('path');
const jsonTable = require('../models/jsonTable');
const productsTable = jsonTable('products');

module.exports = {
    products: (req, res) => {
        let products = productsTable.all()

        res.render('products/products', { 
            title: 'Listado de productos', 
            products       
        });
    },
    productCreate: (req, res) => {
        res.render('products/productCreate');
    },
    productStore: (req, res) => {
        // Generamos el nuevo producto
        let product = req.body;

        if (req.file) {
            product.image = req.file.filename;
        } else {
            //res.send('La imagen es obligatoria');
            //default_img = path.join(__dirname, '../../public/images/products/default.png');
            default_img = ('default.png')
            product.image = default_img;
        }
        
        let productId = productsTable.create(product);
        
        res.redirect('products/productDetail/' + productId);
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