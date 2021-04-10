const fs = require('fs');
const path = require('path');
const jsonTable = require('../models/jsonTable');
const productsTable = jsonTable('products');
const db = require ("../database/models")

module.exports = {
    products: (req, res) => {
        db.product.findAll()
        db.Product_cat.findAll()
            .then(function(products){
                return res.render('products/products', { 
                    title: 'Listado de productos', 
                    products,
                    product_category       
                })
            })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
    },

    productCreate: (req, res) => {
        db.Product_cat.findAll()
        .then((product_category)=>{
            res.render('products/productCreate',{product_category})
        })
        .catch((errors) => {
            console.log(errors);
            res.send("Ha ocurrido un error");
        });
    
    },
    productStore: (req, res) => {
        // Generamos el nuevo producto
        db.product.create({
            name: req.body.name,
            desciption: req.body.desciption,
            price: req.body.price,
            discount: req.body.discount,
            id_category: parseInt(req.body.Product_cat),
            id_brand: parseInt(req.body.Product_bra),
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

            .then((products) => {
                res.redirect('products/productDetail/' + db.product.product_id , {products , product_category})
    
            })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
},
    productDetail: (req, res) => {
        db.Product_cat.findAll()
        db.Product.findByPk(req.params.id)
        .then((products) => {
            if ( products ) {
                res.render('products/productDetail', { products , product_category  });
            } else {
                res.send('No encontré el producto');
            }           
        })
        .catch((error) => {
            console.log(error);
            res.send("Ha ocurrido un error");
        }); 
              
    },
 
    productEdit: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then((products) => {
          if (products) {
            db.Product_cat.findAll()
              .then((product_category) => {
                res.render("products/edit", { product_category, products });
              })
              .catch((error) => {
                console.log(error);
                res.send("Ha ocurrido un error");
              });
          }
        });
    },

    update: (req, res) => {
        let upProduct = req.body;
        if (req.file) {
            upProduct.image = req.file.filename;
        }
    
          const { id } = req.params;
          const { name, description, price, discount, id_category, id_brand } = req.body;
          db.Product.findByPk(id)
          .then((product) => {
            const originalImage = product.image;
    
            db.Product.update(
              {
                name,
                description,
                price,
                discount,
                id_category,
                id_brand,
                image: req.file ? req.file.filename : originalImage,
              },
              {
                where: {
                  id,
                },
              }
            ).then(() => {
              res.redirect(`productDetail/${id}`);
            });
          });

    },

    destroy: (req, res) => {
        db.Product.destroy ({
            where: {
            id: req.params.id,
            }
        })
        .then(()=> {
            res.redirect("/");
        });
    },

    productCart: (req,res)=>{
        db.Product.findAll()
        .then((products) => {
        res.render("products/productCart", {products});
      })
      .catch((error) => {
        console.log(error);
        res.send("Ha ocurrido un error");
      });
  },
}