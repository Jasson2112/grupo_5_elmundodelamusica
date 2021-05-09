const express= require ("express");
const router= express.Router();
const userController= require("../controllers/usersController");
const path = require('path');

//Middlewares//
const loginMiddeleware = require ("../middlewares/loginMiddeleware")
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddeleware = require("../middlewares/adminMiddeleware")
const userTypeMiddeleware = require("../middlewares/userTypeMiddeleware")

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
    body("name").notEmpty().withMessage("Dato obligatorio").isLength({ min: 2}).withMessage("Minimo 2 caracteres"),
    body("first_name").notEmpty().withMessage("Dato obligatorio").isLength({ min: 2}).withMessage("Minimo 2 caracteres"),
    body("last_name").notEmpty().withMessage("Dato obligatorio").isLength({ min: 2}).withMessage("Minimo 2 caracteres"),
    body("email")
        .notEmpty().withMessage("Dato obligatorio").bail()
        .isEmail().withMessage("debe ser un formato de email válido"),
    body("password").notEmpty().withMessage("Dato obligatorio").isLength({ min: 8}).withMessage("Minimo 8 caracteres"),
    body("id_category").notEmpty().withMessage("Dato obligatorio"),
    body("tel").notEmpty().withMessage("Dato obligatorio"),
    body("address").notEmpty().withMessage("Dato obligatorio"),
    body("image").custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.png', '.jpg', '.jpeg', ".gif"];//extensiones permitidas
        if(file && file.originalname){
            let extension = path.extname(file.originalname).toLowerCase();
            if (!acceptedExtensions.includes(extension)){
                throw new Error ('Debe ser una imagen valida del tipo "png, jpg, jpeg, gif"');
            };            
        }
        return true;
        //no es obligacion de que suba una imagen
    })

]


router.get("/", adminMiddeleware, userController.users);

router.get("/register", loginMiddeleware, userController.userCreate);

router.post("/", upload.single('image'), validations , userController.userRegister);

router.get("/login", loginMiddeleware, userController.login);

router.post("/login", userController.loginProcess);

router.get("/userDetail", authMiddleware, userController.userDetail);

router.get("/logout", userController.logout);

router.post("/logout", userController.logout);

router.get("/userEdit/:id", userTypeMiddeleware, userController.userEdit);

router.put("/:id", upload.single('image'), userController.update);

router.delete('/:id', userController.destroy);

router.get("/imageUser/:id",  userController.imageUser);



module.exports=router