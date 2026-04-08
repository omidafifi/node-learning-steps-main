const http = require("http");
const mongodb = require("./mongoDB");
const PORT = 3000;
const products = require("./products.json");
const ProductsController = require("./controllers/product.controller");
const ErrorHandler = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    ProductsController.get(req, res);
  } else if (req.url.match(/\/api\/product\/[0-9]+/)) {
    ProductsController.getById(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server run on Port ${PORT}`);
});
