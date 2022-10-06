//* imports:
require('dotenv').config();

const routes_products = require('./routes/routesProducts');
const routes_categories = require('./routes/routesCategories');
const express = require('express');

//* initialization:
const app = express();
app.set('port', process.env.PORT || 8080);

//* middlewares:
app.use(express.json());

//* routes:
app.use('/products', routes_products);
app.use('/categories', routes_categories);

//* exports:
module.exports = app;
