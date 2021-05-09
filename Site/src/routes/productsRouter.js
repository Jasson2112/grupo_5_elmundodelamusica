const express= require ("express");
const router= express.Router();
const productController= require("../controllers/productsController");
const path = require('path');
const adminProMiddeleware = require("../middlewares/adminProMiddeleware")
const {check}= require ("express-validator")

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/products/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

const validationsProd=[
    check("name").notEmpty().withMessage("Dato obligatorio").isLength({ min: 5}).withMessage("Minimo 5 caracteres"),
    check("description").notEmpty().withMessage("Dato obligatorio").isLength({ min: 20}).withMessage("Minimo 20 caracteres"),
    check("price").notEmpty().withMessage("Dato obligatorio").isNumeric("Debe ingresar un numero") ,
    check("discount").notEmpty().withMessage("Dato obligatorio").isNumeric("Debe ingresar un numero"),
    check("image").custom((value, {req})=>{
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



router.get("/", productController.products);

router.get("/productCreate", adminProMiddeleware, productController.productCreate);

router.post("/", upload.single('image'), validationsProd, productController.productStore);

router.get("/productDetail/:id",  productController.productDetail);

router.get("/productEdit/:id", adminProMiddeleware, productController.productEdit);

router.put("/:id", upload.single('image'), validationsProd, productController.update);

router.delete('/:id', adminProMiddeleware, productController.destroy);

router.get("/productCart", productController.productCart);

router.get("/tutorial", productController.tutorial);

router.get("/imageDetail/:id", productController.imageDetail);





module.exports=router