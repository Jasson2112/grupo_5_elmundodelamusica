const db = require ("../database/models")
const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'

module.exports = {
    listProducts(req, res) {
        db.Products.findAll({include: [{association: "productCategory"}, {association: "productBrand"}]})
            .then(products => {

                arrayProducts = []

                function product (product_id, name, description, productCategory){
                    this.product_id= product_id;
                    this.name = name;
                    this.description = description;
                    this.productCategory = productCategory;
                    this.detail = "http://localhost:3030/api/product/"+ product_id;
                };
                var productos= {}
                for(i=0; i<products.length ; i++){
                    productos= new product (products[i].product_id,
                        products[i].name,
                        products[i].description,
                        products[i].productCategory,
                        products[i].detail
                        )
                    arrayProducts.push(productos)
                    }
                


                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalProducts: products.length
                        },
                        data: arrayProducts,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    },
    detailProduct(req, res) {
        const { id } = req.params

        db.Products.findByPk(id, {include: [{association: "productCategory"}, {association: "productBrand"}]})
            .then(product => {
                
                if (!product) {
                    return res.status(404)
                    .json({
                        status: STATUS_NOT_FOUND
                    })
                    
                }

                function newproduct (product_id, name, description, price, discount, productCategory, productBrand){
                    this.product_id= product_id;
                    this.name = name;
                    this.description = description;
                    this.price = price;
                    this.discount = discount;
                    this.productCategory = productCategory;
                    this.productBrand = productBrand;
                    this.image = "http://localhost:3030/products/imageDetail/" + product_id;
                };

                var producto =  {}
                producto = new newproduct (product.product_id,
                        product.name,
                        product.description,
                        product.price,
                        product.discount,
                        product.productCategory,
                        product.productBrand,
                        product.image
                    )

                res.status(200)
                    .json({
                        data: producto,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    listUsers(req, res) {
        db.Users.findAll({include: [{association: "userCategory"}]})
            .then(users => {
                
                arrayUsers = []

                function user (user_id, first_name, last_name, email){
                    this.user_id= user_id;
                    this.first_name = first_name;
                    this.last_name = last_name;
                    this.email = email;
                    this.detail = "http://localhost:3030/api/user/"+ user_id;
                };
                var usuario= {}
                for(i=0; i<users.length ; i++){
                    usuario= new user (users[i].user_id,
                        users[i].first_name,
                        users[i].last_name,
                        users[i].email,
                        users[i].detail
                        )
                    arrayUsers.push(usuario)
                    }
                                
                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalusers: users.length
                        },
                        data: arrayUsers,
                        status: STATUS_SUCCESS
                    })

                
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    },
    detailUser(req, res) {
        const { id } = req.params

        db.Users.findByPk(req.params.id, {include: [{association: "userCategory"}]})
            .then(user => {
                
                if (!user) {
                    return res.status(404)
                    .json({
                        status: STATUS_NOT_FOUND
                    })
                }

                              
                
                function newuser (user_id, first_name, last_name, email,address, tel, image){
                    this.user_id= user_id;
                    this.first_name = first_name;
                    this.last_name = last_name;
                    this.email = email;
                    this.address = address;
                    this.tel = tel;
                    this.image = "http://localhost:3030/users/imageUser/" + user_id;
                };
                var usuario =  {}
                usuario = new newuser (user.user_id,
                        user.first_name,
                        user.last_name,
                        user.email,
                        user.address,
                        user.tel,
                        user.image
                    )
                    
                   
                res.status(200)
                    .json({
                        data: usuario,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    categories (req, res) {
        db.Product_category.findAll({include: [{association: "productCat"}]})
            .then(categories => {

                arrayCategories = []

                function category (id_category, name){
                    this.id_category= id_category
                    this.name = name;
                };
                var categorias= {}
                for(i=0; i<categories.length ; i++){
                    categorias= new category (
                        categories[i].id_category,
                        categories[i].name,
                        )
                    arrayCategories.push(categorias)
                    }
                


                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalCategories: categories.length
                        },
                        data: arrayCategories,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    }
    
}