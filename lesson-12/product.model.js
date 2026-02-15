const products = require("./product.json");

async function find() {
  //c(r)ud => find
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

const ProductModel = {
  find,
};

module.exports = ProductModel;
