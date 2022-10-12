//* imports:
require('dotenv').config();

const productRoutes = require('./routes/productsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const express = require('express');

//* initialization:
const app = express();
app.set('port', process.env.PORT || 8080);

//* middlewares:
app.use(express.json());

//* routes:
app.use('/products', productRoutes);
app.use('/categories', categoriesRoutes);
app.use('/orders', ordersRoutes);

//* exports:
module.exports = app;
