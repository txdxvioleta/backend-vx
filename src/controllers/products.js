//* imports:
const connection = require('../database/dbConfig');

const getAllProducts = async (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  // query:
  await connection.query(`SELECT * FROM productos ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getProductByCategory = async (req, res) => {  
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  await connection.query(
    `SELECT * FROM productos WHERE categoria = '${req.params.category}' ${limit}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
    }
  );
};

const getProductById = async (req, res) => {
  await connection.query(`SELECT * FROM productos WHERE id_producto = ${req.params.id}`, (error, result) => {
    !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
  });
};

const addProduct = async (req, res) => {
  await connection.query('INSERT INTO productos SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting data');
  });
};

const updateProduct = async (req, res) => {
  await connection.query(
    `UPDATE productos SET ? WHERE id_producto = ?`,
    [req.body, req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Updated successfully')
        : res.status(404).json('No results');
    }
  );
};

const deleteProduct = async (req, res) => {
  await connection.query(`DELETE FROM productos WHERE id_producto = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(404).json('No results');
  });
};

//* exports:
module.exports = {
  getAllProducts,
  getProductByCategory,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
