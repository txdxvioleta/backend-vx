//* imports:
const router = require('express').Router();
const {
  getAllCategories,
  getByCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories');

//* categories:
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.get('/category/:category', getByCategory);
router.post('/', addCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

//* exports:
module.exports = router;
