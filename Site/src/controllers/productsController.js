
const db = require ("../database/models")

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
        // Generamos el nuevo producto
        db.Products.create({
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
                res.redirect('products/productDetail/' + db.Products.product_id , {products , product_category})
    
            })
            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error");
            });
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
        Promise.All ([product , categories , brands])
          .then(([product, categories, brands]) => {
            if ( product ) {
              res.render("products/edit", { product:product, categories:categories, brands:brands });
            } else {
              res.send('No encontré el producto');
            }           
          })
          .catch((error) => {
            console.log(error);
            res.send("Ha ocurrido un error");
          });
},

    update: (req, res) => {
        let upProduct = req.body;
        if (req.file) {
            upProduct.image = req.file.filename;
        }
    
          const { id } = req.params.id;
          const { name, description, price, discount, id_category, id_brand } = req.body;
          db.Products.findByPk(id)
          .then((product) => {
            const originalImage = product.image;
    
            db.Products.update(
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
              res.redirect("productDetail/" + req.params.id);
            });
          })
          .catch((errors) => {
            console.log(errors);
            res.send("Ha ocurrido un error");
        });

    },

    destroy: (req, res) => {
      db.Products.destroy ({
            where: {
            id: req.params.id,
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
}
}