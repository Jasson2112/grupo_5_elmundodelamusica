
const db = require ("../database/models")
const { validationResult }= require ("express-validator");

module.exports = {
    products: (req, res) => {
        db.Products.findAll({include: [{association: "productCategory"}, {association: "productBrand"}]})
            .then(function(products){
                return res.render('products/products', { 
                    title: 'Listado de productos', 
                    products,     
                })
            })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
    },

    productCreate: (req, res) => {
        let category= db.Product_category.findAll()
        let brand= db.Product_brand.findAll()

        Promise.all([ category, brand])
            .then(([categories, brands])=>{
              res.render('products/productCreate',{categories:categories , brands:brands})
            })
            .catch((errors) => {
              console.log(errors);
              res.send("Ha ocurrido un error");
            });
    
    },
    productStore: (req, res) => {
      let imagen = (req.file) ? req.file.filename : "default.png";

      const resultValidation = validationResult(req);
      console.log(resultValidation)

      if (resultValidation.errors.length > 0){
        let category= db.Product_category.findAll()
        let brand= db.Product_brand.findAll()

        Promise.all([ category, brand])
            .then(([categories, brands])=>{
                    return res.render('products/productCreate', {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        categories,
                        brands
                      })
                      .catch((errors) => {
                        console.log(errors);
                        res.send("Ha ocurrido un error");
                      });
            })
    }else{

        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            id_category: parseInt(req.body.Product_cat),
            id_brand: parseInt(req.body.Product_bra),
            image: imagen,
                   
        })

            .then((products) => {
                res.redirect('products/')
                })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
          }
},
    productDetail: (req, res) => {
      db.Products.findByPk(req.params.id , {include: [{association: "productCategory"}, {association: "productBrand"}]})
        .then((products) => {
            if ( products ) {
                res.render('products/productDetail', {products});
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
        let product= db.Products.findByPk(req.params.id)
        let categories= db.Product_category.findAll()
        let brands= db.Product_brand.findAll()
        Promise.all ([product , categories , brands])
          .then(([product, categories, brands]) => {
            if ( product ) {
              res.render("products/productEdit", { product:product, categories:categories, brands:brands });
            } else {
              res.send('No encontré el producto');
            }           
          })
          .catch((error) => {
            console.log(error);
            res.send("Ha ocurrido un error");
          });
},

    update: function (req,res) {
      console.log(req.body)
      let imagen = (req.file) ? req.file.filename : req.body.oldProductImage;

      const resultValidation = validationResult(req);
      let product = req.body;
      product.product_id = req.params.id
      
      if (resultValidation.errors.length > 0){
        let category= db.Product_category.findAll()
        let brand= db.Product_brand.findAll()

        Promise.all([ category, brand])
            .then(([categories, brands])=>{
                    return res.render('products/productEdit', {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        categories,
                        brands,
                        product
                      })
                      .catch((errors) => {
                        console.log(errors);
                        res.send("Ha ocurrido un error");
                      });
            })
    }else{

      // const resultValidation = validationResult(req);
      // if (resultValidation.errors.length > 0){
      //     return res.render("users/userEdit", {
      //         errors: resultValidation.mapped(),
      //         oldData: req.body
      //     })
      // }
      db.Users.findByPk(req.params.id)
        .then(function(prod) {
                    
          db.Products.update({
              name : req.body.name,
              description : req.body.description,
              price : req.body.price,
              discount : req.body.discount,
              id_category : req.body.Product_cat,
              id_brand : req.body.Product_bra,
              image : imagen,
          },{
              where: {
                  product_id: req.params.id
                  }
          })
          res.redirect("productDetail/" + req.params.id);
        })
        .catch(error => console.log("Falló el acceso a la DB o la edición del producto", error))
    }
    },
    
    // (req, res) => {
    //     let upProduct = req.body;
    //     if (req.file) {
    //         upProduct.image = req.file.filename;
    //     }
    
    //       const { id } = req.params.id;
    //       const { name, description,id_category, id_brand, price, discount } = req.body;
    //       db.Products.findByPk(id)
    //       .then((product) => {
    //         console.log(product)
    //         const originalImage = product.image;
    
    //         db.Products.update(
    //           {
    //             name,
    //             description,
    //             price,
    //             discount,
    //             id_category,
    //             id_brand,
    //             image: req.file ? req.file.filename : originalImage,
    //           },
    //           {
    //             where: {
    //               product_id,
    //             },
    //           }
    //         ).then(() => {
    //           res.redirect("productDetail/" + req.params.id);
    //         });
    //       })
    //       .catch((errors) => {
    //         console.log(errors);
    //         res.send("Ha ocurrido un error");
    //     });

    // },

    destroy: (req, res) => {
      db.Products.destroy ({
            where: {
            product_id: req.params.id,
            }
        })
        .then(()=> {
            res.redirect("/");
        })
        .catch((errors) => {
          console.log(errors);
          res.send("Ha ocurrido un error");
      });
    },

    productCart: (req,res)=>{
      db.Products.findAll()
        .then((products) => {
        res.render("products/productCart", {products});
      })
      .catch((error) => {
        console.log(error);
        res.send("Ha ocurrido un error");
      });
  },
    tutorial: (req,res)=>{
       res.render("products/tutorial");
},
  imageDetail:(req,res)=>{
    db.Products.findByPk(req.params.id , {include: [{association: "productCategory"}, {association: "productBrand"}]})
  .then((products) => {
      if ( products ) {
          res.render('products/imageDetail', {products});
      } else {
          res.send('No encontré el producto');
      }           
  })
  .catch((error) => {
      console.log(error);
      res.send("Ha ocurrido un error");
  }); 
    
},
}