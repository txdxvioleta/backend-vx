//* imports:
require('dotenv').config();

const routes = require('./routes');
const express = require('express');

//* initialization:
const app = express();
app.set('port', process.env.PORT || 8080);

//* middlewares:
app.use(express.json());

//* routes:
app.use('/products', routes);
//app.use('/categories',routes);

//* exports:
module.exports = app;
