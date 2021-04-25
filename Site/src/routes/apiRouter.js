const express= require ("express");
const router= express.Router();
const apiController= require("../controllers/apiController");


router.get('/products', apiController.listProducts)
router.get('/product/:id', apiController.detailProduct)
router.get('/users', apiController.listUsers)
router.get('/user/:id', apiController.detailUser)

module.exports=router