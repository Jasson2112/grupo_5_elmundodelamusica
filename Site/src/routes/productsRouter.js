const express= require ("express");
const router= express.Router();
const productController= require("../controllers/productsController");


router.get("/products", productController.products);

router.get("/productCreate", productController.productCreate);

router.post("/", productController.productStore);

router.get("/productDetail", productController.productDetail);

router.get("/productCart", productController.productCart);

router.get("/tutorial", productController.tutorial);

router.get("/productEdit", productController.productEdit);



module.exports=router