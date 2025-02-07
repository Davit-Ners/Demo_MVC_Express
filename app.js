import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import homeRouter from './routers/home.router.js';
import productRouter from './routers/products.router.js';

//! Recuperation des variables d'env 
const {NODE_ENV, PORT} = process.env;

const app = express();

//! Configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//! App Middleware 
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//! Routing
app.use(homeRouter);
app.use(productRouter);

//! Demarrage du serveur 
app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT} [${NODE_ENV}]`);
});