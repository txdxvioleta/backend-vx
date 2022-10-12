//* imports:
const connection = require('../models/dbConfig');

const getAllOrders = async (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  // query:
  await connection.query(`SELECT * FROM ordenes ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getAllProductsOrders = async (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  await connection.query(`SELECT * FROM product_orden ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const createOrder = async (req, res) => {
  await connection.query('INSERT INTO ordenes SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error creating order');
  });
};

const addProductOrder = async (req, res) => {
  //id prod, id_orden, cantidad, precio_producto

  await connection.query('INSERT INTO product_orden SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting order');
  });
};

const updateProductOrder = async (req, res) => {
  await connection.query(
    `UPDATE product_orden SET ? WHERE id = ?`,
    [req.body, req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Updated successfully')
        : res.status(500).json('Error updating product order');
    }
  );
};

const deleteProductOrder = async (req, res) => {
  await connection.query(`DELETE FROM product_orden WHERE id = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(500).json('Error deleting product order');
  });
};

const deleteOrder = async (req, res) => {
  await connection.query(`DELETE FROM ordenes WHERE id_orden = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(500).json('Error deleting order');
  });
};

//* exports:
module.exports = {
  getAllOrders,
  getAllProductsOrders,
  createOrder,
  addProductOrder,
  updateProductOrder,
  deleteProductOrder,
  deleteOrder,
};
