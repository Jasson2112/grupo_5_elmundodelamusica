const express = require('express');
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views","./src/views");


const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');

app.use("/", mainRouter);
app.use('/products', productsRouter);
app.use("/users", usersRouter);


app.listen(process.env.PORT || 3030    , ()=>{
    console.log('Servidor funcionando');
});


