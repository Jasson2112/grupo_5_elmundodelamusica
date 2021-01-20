const express = require('express');
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views","./src/views");


const mainRouter = require('./src/routes/mainRouter');

app.use("/", mainRouter);

app.listen(process.env.PORT || 3030    , ()=>{
    console.log('Servidor funcionando');
});


