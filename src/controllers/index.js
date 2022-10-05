//* imports:
const connection = require('../database/');
const checkURL = require('../helpers');

//? GET:
const GET = async (req, res) => {
  // initializations:
  let limit = '';
  let where = '';

  // destructuring:
  const { tableName } = checkURL(req.baseUrl);

  // pagination:
  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  // query:
  await connection.query(`SELECT * FROM ${tableName} ${where} ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No more products');
  });
};

//? GET by id:
const GET_ID = async (req, res) => {
  // destructuring:
  const { tableName, id_table } = checkURL(req.baseUrl);

  await connection.query(
    `SELECT * FROM ${tableName} WHERE ${id_table} = ${req.params.id}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('Product not found');
    }
  );
};

//? POST:
const POST = async (req, res) => {
  // destructuring:
  const { tableName } = checkURL(req.baseUrl);

  await connection.query(`INSERT INTO ${tableName} SET ?`, [req.body], (error) => {
    !error ? res.status(201).json('Product added') : res.status(500).json('Something goes wrong');
  });
};

//? PUT:
const UPDATE = async (req, res) => {
  // destructuring:
  const { tableName, id_table } = checkURL(req.baseUrl);

  await connection.query(
    `UPDATE ${tableName} SET ? WHERE ${id_table} = ?`,
    [req.body, req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('User updated')
        : res.status(404).json('User not found');
    }
  );
};

// DELETE:
const DELETE = async (req, res) => {
  // destructuring:
  const { tableName, id_table } = checkURL(req.baseUrl);

  await connection.query(
    `DELETE FROM ${tableName} WHERE ${id_table} = ?`,
    [req.params.id],
    (error, result) => {
      !error && result.affectedRows > 0
        ? res.status(202).json('Product deleted')
        : res.status(404).json('Product not found');
    }
  );
};

//* exports:
module.exports = { GET, GET_ID, POST, UPDATE, DELETE };
