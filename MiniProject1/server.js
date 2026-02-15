const http = require("http");
const products = require("./data/products");
const ProductsController = require("./controllers/products.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url == "/api/products" && req.method == "GET") {
    ProductsController.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method == "GET") {
    ProductsController.getById(req, res);
  } else if (req.url == "/api/products" && req.method == "POST") {
    ProductsController.creat(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
});
server.listen(PORT, () =>
  console.log(`click to join on http://localhost:${PORT}`)
);
