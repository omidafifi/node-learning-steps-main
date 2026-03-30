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

const ProductModel = {
  find,
};

module.exports = ProductModel;
