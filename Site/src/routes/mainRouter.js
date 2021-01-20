const express= require ("express");
const router= express.Router();
const maincontroller= require("../controllers/mainController");

router.get("/", maincontroller.home);

router.get("/login", maincontroller.login);

router.get("/register", maincontroller.register);

router.get("/productCart", maincontroller.productCart);

router.get("/productDetail", maincontroller.productDetail);

router.get("/products", maincontroller.products);

router.get("/tutorial", maincontroller.tutorial);



module.exports=router