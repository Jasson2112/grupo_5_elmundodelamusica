
const fs = require("fs")
const path= require("path")

let products= fs.readFileSync(path.join( __dirname, "../database/products.json") ,"utf-8");
products= JSON.parse(products)

module.exports={

    products: (req,res)=>{
        res.render("products/products");
    },
    productCreate: (req,res)=>{
        res.render("products/productCreate");
    },
    productStore: (req,res)=>{

          
        let newProduct= req.body;
        products.push(newProduct)
        let productsJson= JSON.stringify(products)
        fs.writeFileSync(path.join( __dirname, "../database/products.json"), productsJson);
        return res.send("Hola ")   
    },
    
    
    productCart: (req,res)=>{
        res.render("products/productCart");
    },
    productDetail: (req,res)=>{
        res.render("products/productDetail");
    },
    
    tutorial: (req,res)=>{
        res.render("products/tutorial");
    },
    
    productEdit: (req,res)=>{
        res.render("products/productEdit");
    }

    
}
