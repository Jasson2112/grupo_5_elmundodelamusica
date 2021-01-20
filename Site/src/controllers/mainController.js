const express= require("express");
const path= require("path");


module.exports={
    home: (req,res)=>{
        res.render(path.resolve("./src/views/home.ejs"));
    },
    login: (req,res)=>{
        res.render(path.resolve("./src/views/login.ejs"));
    },
    register: (req,res)=>{
        res.render(path.resolve("./src/views/register.ejs"));
    },
    productCart: (req,res)=>{
        res.render(path.resolve("./src/views/productCart.ejs"));
    },
    productDetail: (req,res)=>{
        res.render(path.resolve("./src/views/productDetail.ejs"));
    },
    products: (req,res)=>{
        res.render(path.resolve("./src/views/products.ejs"));
    },
    tutorial: (req,res)=>{
        res.render(path.resolve("./src/views/tutorial.ejs"));
    }
    
}

