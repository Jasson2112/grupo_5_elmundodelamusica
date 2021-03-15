const express= require ("express");
const router= express.Router();
const userController= require("../controllers/usersController");
const path = require('path');

const multer = require('multer');

const {body}= require ("express-validator")

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

const validations=[
    body("first_name").notEmpty().withMessage("Dato obligatorio"),
    body("last_name").notEmpty().withMessage("Dato obligatorio"),
    body("email")
        .notEmpty().withMessage("Dato obligatorio").bail()
        .isEmail().withMessage("debe ser un formato de email válido"),
    body("password").notEmpty().withMessage("Dato obligatorio"),
    body("category").notEmpty().withMessage("Dato obligatorio"),
]


router.get("/", userController.users);

router.get("/register", userController.userCreate);

router.post("/", upload.single('image'), validations , userController.userRegister);

router.get("/login", userController.login);

router.post("/login", userController.loginProcess);

router.get("/userDetail/:id", userController.userDetail);

router.get("/userEdit/:id", userController.userEdit);

router.put("/:id", upload.single('image'), userController.update);

router.delete('/:id', userController.destroy);



module.exports=router