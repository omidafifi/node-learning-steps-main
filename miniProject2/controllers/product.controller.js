const product_model = require("../models/Product");

async function getProductController(req, res) {
  try {
    const products = await product_model.find();
  } catch (error) {}
}
