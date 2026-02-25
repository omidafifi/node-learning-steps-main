const products = require("./products");

async function find() {
  return products;
}

const product_model = { find };
module.exports = product_model;
