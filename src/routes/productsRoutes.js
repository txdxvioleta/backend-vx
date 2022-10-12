//* imports:
const router = require('express').Router();
const {
  getAllProducts,
  getProductByCategory,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsControllers');

//* products:
router.get('/', getAllProducts);
router.get('/category/:category', getProductByCategory);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

//* exports:
module.exports = router;
