const express= require ("express");
const router= express.Router();
const maincontroller= require("../controllers/mainController");

router.get("/", maincontroller.home);





module.exports=router