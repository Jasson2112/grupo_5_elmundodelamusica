const express= require ("express");
const router= express.Router();
const apiController= require("../controllers/apiController");


router.get('/products', apiController.listProducts)
router.get('/product/:id', apiController.detailProduct)
router.get('/categories', apiController.categories)
router.get('/users', apiController.listUsers)
router.get('/user/:id', apiController.detailUser)
router.get('/product/lastproduct/:id', apiController.lastProduct)
router.get('/productscategories', apiController.productsCategories)


module.exports=router