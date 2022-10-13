//* imports:
const connection = require('../models/dbConfig');

const getAllCategories = (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  // query:
  connection.query(`SELECT * FROM categorias ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getByCategory = (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  connection.query(
    `SELECT * FROM categorias WHERE nombre_categ = '${req.params.category}' ${limit}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
    }
  );
};

const getCategoryById = (req, res) => {
  connection.query(`SELECT * FROM categorias WHERE id_categoria = ${req.params.id}`, (error, result) => {
    !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
  });
};

const addCategory = (req, res) => {
  connection.query('INSERT INTO categorias SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting category');
  });
};

const updateCategory = (req, res) => {
  connection.query(
    `UPDATE categorias SET ? WHERE id_categoria = ?`,
    [req.body, req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Updated successfully')
        : res.status(404).json('No results');
    }
  );
};

const deleteCategory = (req, res) => {
  connection.query(`DELETE FROM categorias WHERE id_categoria = ?`, [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('Deleted successfully')
      : res.status(404).json('No results');
  });
};

//* exports:
module.exports = {
  getAllCategories,
  getByCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
