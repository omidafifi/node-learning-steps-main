const ProductModel = require("../models/productModel");

async function get(req, res) {
  try {
    const products = await ProductModel.find();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (err) {}
}

async function getById(req, res) {
  try {
    const [, , , id] = req.url.split("/");

    const product = await ProductModel.findById(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Not found any product" }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (err) {}
}

const ProductsController = {
  get,
  getById,
};

module.exports = ProductsController;
