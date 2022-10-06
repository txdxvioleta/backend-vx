//* imports:
const connection = require('../database/dbConfig');

const getAllCategories = async (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }

  // query:
  await connection.query(`SELECT * FROM categorias ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

const getByCategory = async (req, res) => {
  // pagination:
  let limit = '';

  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  await connection.query(
    `SELECT * FROM categorias WHERE categoria = '${req.params.category}' ${limit}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
    }
  );
};

const getCategoryById = async (req, res) => {
  await connection.query(
    `SELECT * FROM categorias WHERE id_categoria = ${req.params.id}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
    }
  );
};

const addCategory = async (req, res) => {
  await connection.query('INSERT INTO categorias SET ?', [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting category');
  });
};

const updateCategory = async (req, res) => {
  await connection.query(
    `UPDATE categorias SET ? WHERE id_categoria = ?`,
    [req.body, req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Updated successfully')
        : res.status(404).json('No results');
    }
  );
};

const deleteCategory = async (req, res) => {
  await connection.query(
    `DELETE FROM categorias WHERE id_categoria = ?`,
    [req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Deleted successfully')
        : res.status(404).json('No results');
    }
  );
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
