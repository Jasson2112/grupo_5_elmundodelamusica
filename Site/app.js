const express = require('express');
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views","./Site/src/views")


app.listen(process.env.PORT || 3030    , ()=>{
    console.log('Servidor funcionando');
});

const mainRouter = require('./src/routes/mainRouter');
const mainController= require ("./src/controllers/mainController")

app.use("/", mainController);
app.use("/", mainRouter);



/*
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/src/views/register.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/src/views/productCart.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/src/views/productDetail.html');
});

app.get('/products', (req,res)=>{
    res.sendFile(__dirname + '/src/views/products.html');
});

app.get('/tutorial', (req,res)=>{
    res.sendFile(__dirname + '/src/views/tutorial.html');
});*/

