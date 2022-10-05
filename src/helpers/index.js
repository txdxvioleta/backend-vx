// CheckURL:
const checkURL = (URL) => {
  if (URL === '/products') {
    return {
      tableName: 'productos',
      id_table: 'id_producto',
    };
  } else if (URL === '/categories') {
    return {
      tableName: 'categorias',
      id_table: 'id_categoria',
    };
  }
};

module.exports = checkURL;