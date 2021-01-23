module.exports={
    
    productCart: (req,res)=>{
        res.render("products/productCart");
    },
    productDetail: (req,res)=>{
        res.render("products/productDetail");
    },
    products: (req,res)=>{
        res.render("products/products");
    },
    tutorial: (req,res)=>{
        res.render("products/tutorial");
    }
    
}
