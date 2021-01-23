const express= require ("express");
const router= express.Router();
const userscontroller= require("../controllers/usersController");


router.get("/login", userscontroller.login);

router.get("/register", userscontroller.register);



module.exports=router