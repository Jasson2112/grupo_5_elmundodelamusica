const express= require ("express");
const router= express.Router();
const productController= require("../controllers/productsController");


router.get("/products", productController.products);

router.get("/productCart", productController.productCart);

router.get("/productDetail", productController.productDetail);

router.get("/tutorial", productController.tutorial);

router.get("/productCreate", productController.productCreate);

router.get("/productEdit", productController.productEdit);



module.exports=router