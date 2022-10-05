//* imports:
const connection = require('../database/');
const checkURL = require('../helpers');

//? GET:
const GET = async (req, res) => {
  // initializations:
  let limit = '';
  let where = 'WHERE TRUE ';

  // destructuring:
  const { tableName } = checkURL(req.baseUrl);

  // filters:
  if (req.query.category) {
    where += `AND categoria = '${req.query.category}'`;
  }

  // pagination:
  if (req.query.page) {
    const size = 5;
    const operation = (req.query.page - 1) * size;
    limit += `LIMIT ${operation}, ${size}`;
  }
  // query:
  await connection.query(`SELECT * FROM ${tableName} ${where} ${limit}`, (error, result) => {
    !error && result.length > 0 ? res.json(result) : res.status(500).json('No results');
  });
};

//? GET by id:
const GET_ID = async (req, res) => {
  // destructuring:
  const { tableName, id_table } = checkURL(req.baseUrl);

  await connection.query(
    `SELECT * FROM ${tableName} WHERE ${id_table} = ${req.params.id}`,
    (error, result) => {
      !error && result.length > 0 ? res.status(200).json(result) : res.status(404).json('No results');
    }
  );
};

//? POST:
const POST = async (req, res) => {
  // destructuring:
  const { tableName } = checkURL(req.baseUrl);

  await connection.query(`INSERT INTO ${tableName} SET ?`, [req.body], (error) => {
    !error ? res.status(201).json('Added successfully') : res.status(500).json('Error inserting data');
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
        ? res.status(202).json('Updated successfully')
        : res.status(404).json('No results');
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
        ? res.status(202).json('Deleted successfully')
        : res.status(404).json('No results');
    }
  );
};

//* exports:
module.exports = { GET, GET_ID, POST, UPDATE, DELETE };
