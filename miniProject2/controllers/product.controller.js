const ProductModel = require("../models/productModel");

async function getProductsController(req, res) {
  try {
    const products = await ProductModel.find();
    res.
  } catch (error) {}
}
