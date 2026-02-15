const products = require("../data/products.json");
const fs = require("fs");
async function find() {
  return new Promise((resoleve, reject) => {
    resoleve(products);
  });
}

async function findById(id) {
  return new Promise((resoleve, reject) => {
    resoleve(products.find((product) => product.id == id));
  });
}
async function creat(product) {
  return new Promise((resoleve, reject) => {
    products.push(product);
    fs.writeFile(`${process.cwd()}/`, JASON.stringify(products), (err) => {
      if (err) reject(err);
      else {
        resoleve({ message: "new product creadted", data: product });
      }
    });
  });
}

const ProductModel = {
  find,
  findById,
  creat,
};

module.exports = ProductModel;
