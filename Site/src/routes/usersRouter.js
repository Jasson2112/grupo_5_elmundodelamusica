const express= require ("express");
const router= express.Router();
const userController= require("../controllers/usersController");
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });




router.get("/users", userController.users);

router.get("/register", userController.userCreate);

router.post("/users", upload.single('image'), userController.userRegister);

router.get("/login", userController.login);

router.get("/userDetail/:id", userController.userDetail);

router.get("/userEdit/:id", userController.userEdit);

router.put("/:id", upload.single('image'), userController.update);

router.delete('/:id', userController.destroy);



module.exports=router