const express= require ("express");
const router= express.Router();
const productController= require("../controllers/productsController");
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/image/products/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



router.get("/", productController.products);

router.get("/productCreate", productController.productCreate);

router.post("/", upload.single('image'), productController.productStore);

router.get("/productDetail/:id", productController.productDetail);

router.get("/productEdit/:id", productController.productEdit);

router.put("/productEdit/:id", upload.single('image'), productController.update);

router.delete('/:id', productController.destroy);

router.get("/productCart", productController.productCart);

router.get("/tutorial", productController.tutorial);





module.exports=router