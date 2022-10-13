//* imports:
const connection = require('../models/dbConfig');

const getAllOrders = (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  // query:
  connection.query(`SELECT * FROM ordenes ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getAllProductsOrders = (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  connection.query(`SELECT * FROM product_orden ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getProductOrderById = (req, res) => {
  const query1 = `SELECT * FROM productos INNER JOIN product_orden USING (id_prod) WHERE id_orden = ${req.params.id_order}`;
  const query2 = `SELECT SUM(cantidad) total_products FROM product_orden WHERE id_orden = ${req.params.id_order}`;

  let total_price = 0;

  connection.query(query1, (error, result) => {
    console.log('*******************************************************');
    const result_parsed = Object.values(JSON.parse(JSON.stringify(result)));
    console.log(result_parsed);
    result_parsed.forEach((prod) => (total_price += prod.precio_prod * prod.cantidad));
    console.log('Total price: ', total_price);
  });

  connection.query(query2, (error, result) => {
    const result_parsed = Object.values(result);
    console.log('Total products:', result_parsed[0].total_products);
  });

  res.json('Success!');
};

const createOrder = (req, res) => {
  connection.query('INSERT INTO ordenes SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error creating order');
  });
};

const addProductOrder = (req, res) => {
  //id prod, id_orden, cantidad, precio_producto

  connection.query('INSERT INTO product_orden SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting order');
  });
};

const updateProductOrder = (req, res) => {
  connection.query(`UPDATE product_orden SET ? WHERE id = ?`, [req.body, req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Updated successfully')
      : res.status(500).json('Error updating product order');
  });
};

const deleteProductOrder = (req, res) => {
  connection.query(`DELETE FROM product_orden WHERE id = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(500).json('Error deleting product order');
  });
};

const deleteOrder = (req, res) => {
  connection.query(`DELETE FROM ordenes WHERE id_orden = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(500).json('Error deleting order');
  });
};

//* exports:
module.exports = {
  getAllOrders,
  getAllProductsOrders,
  getProductOrderById,
  createOrder,
  addProductOrder,
  updateProductOrder,
  deleteProductOrder,
  deleteOrder,
};
