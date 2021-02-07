
const fs = require("fs")
const path= require("path")

let products= fs.readFileSync(path.join( __dirname, "../database/products.json") ,"utf-8");
products= JSON.parse(products)


module.exports={
    
    home: (req,res)=>{
        res.render("home", {
            title:"Listado de Productos",
            products});
    }
    
}
