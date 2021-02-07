

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
    },
    productCreate: (req,res)=>{
        res.render("products/productCreate");
    },
    productEdit: (req,res)=>{
        res.render("products/productEdit");
    }

    
}
