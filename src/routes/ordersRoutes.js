//* imports:
const router = require('express').Router();
const {
  getAllOrders,
  createOrder,
  deleteOrder,
  getAllProductsOrders,
  getProductOrderById,
  addProductOrder,
  updateProductOrder,
  deleteProductOrder,
} = require('../controllers/ordersControllers');

//* orders:
router.get('/', getAllOrders);
router.post('/', createOrder);
router.delete('/:id', deleteOrder);

router.post('/products', addProductOrder);
router.get('/products', getAllProductsOrders);
router.get('/products/:id_order', getProductOrderById);
router.put('/products/:id', updateProductOrder);
router.delete('/products/:id', deleteProductOrder);

//* exports:
module.exports = router;
