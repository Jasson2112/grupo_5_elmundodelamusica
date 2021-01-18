const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3030    , ()=>{
    console.log('Servidor funcionando');
});

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
});