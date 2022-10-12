//* imports:
const router = require('express').Router();
const {
  getAllOrders,
  getAllProductsOrders,
  createOrder,
  addProductOrder,
  updateProductOrder,
  deleteProductOrder,
  deleteOrder,
} = require('../controllers/ordersControllers');

//* orders:
router.get('/', getAllOrders);
router.post('/', createOrder);
router.delete('/:id', deleteOrder);

router.post('/products', addProductOrder);
router.get('/products', getAllProductsOrders);
router.put('/products/:id', updateProductOrder);
router.delete('/products/:id', deleteProductOrder);

//* exports:
module.exports = router;
