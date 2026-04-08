const products = require("../products.json");

async function find() {
  return new Promise((resolve, reject) => {
    try {
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    try {
      const product = products.find((product) => product.id == id);
      resolve(product);
    } catch (error) {
      reject(error);
    }
  });
}

const ProductModel = {
  find,
  findById,
};

module.exports = ProductModel;
