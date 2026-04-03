const ProductModel = require("../models/productModel");

async function getProductsController(req, res) {
  try {
    const products = await ProductModel.find();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (err) {}
}
async function getById(req, res) {
  try {
    const id = req.url.split("/");
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (err) {}
}

const ProductsController = {
  getProductsController,
};

module.exports = ProductsController;
