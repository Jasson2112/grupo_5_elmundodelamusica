const express = require('express');
const session = require ("express-session")
const app = express();
const methodOverride = require('method-override');
const cookies= require("cookie-parser")


app.use(session({
    secret:"secret",
    resave: false,
    saveUninitialized: false,
}));

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views","./src/views");


const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


app.use("/", mainRouter);
app.use('/products', productsRouter);
// app.use("/users", usersRouter);


app.listen(process.env.PORT || 3030    , ()=>{
    console.log('Servidor funcionando');
});


