//* imports:
const router = require('express').Router();
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/');

//* GET:
router.get('/', getProducts);

//* GET id:
router.get('/:idProduct', getProductById);

//* POST:
router.post('/', addProduct);

//* PUT:
router.put('/:idProduct', updateProduct);

//* DELETE:
router.delete('/:idProduct', deleteProduct);

//* exports:
module.exports = router;
