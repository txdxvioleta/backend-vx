//* imports:
const connection = require('../database/');

//GET:
const getProducts = async (req, res) => {

  // Initializations:
  let GET_query = `SELECT * FROM productos `;
  let limit = '';
  let where = '';

  // Pagination:
  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  // Query:
  await connection.query(`${GET_query} ${where} ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json({ message: 'No more products' });
  });
  // console.log(req.baseUrl);
};

//GET id:
const getProductById = async (req, res) => {
  await connection.query(
    `SELECT * FROM productos WHERE id_producto = ${req.params.idProduct}`,
    (error, result) => {
      !error && result.length > 0
        ? res.status(200).json(result)
        : res.status(404).json({ message: 'Product not found' });
    }
  );
};

//POST:
const addProduct = async (req, res) => {
  await connection.query('INSERT INTO productos SET ?', [req.body], (error) => {
    !error
      ? res.status(201).json({ message: 'Product added' })
      : res.status(500).json({ message: 'Something goes wrong' });
  });
};

//PUT:
const updateProduct = async (req, res) => {
  await connection.query(
    'UPDATE productos SET ? WHERE id_producto = ?',
    [req.body, req.params.idProduct],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('User updated')
        : res.status(404).json('User not found');
    }
  );
};

//DELETE:
const deleteProduct = async (req, res) => {
  await connection.query(
    'DELETE FROM productos WHERE id_producto = ?',
    [req.params.idProduct],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Product deleted')
        : res.status(404).json('Product not found');
    }
  );
};

//* exports:
module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
