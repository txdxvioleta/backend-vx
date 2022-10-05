//* imports:
const router = require('express').Router();
const { GET, GET_ID, POST, UPDATE, DELETE } = require('../controllers/');

//* GET:
router.get('/', GET);

//* GET id:
router.get('/:id', GET_ID);

//* POST:
router.post('/', POST);

//* PUT:
router.put('/:id', UPDATE);

//* DELETE:
router.delete('/:id', DELETE);

//* exports:
module.exports = router;
