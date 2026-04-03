const http = require("http");
const mongodb = require("./mongoDB");
const PORT = 3000;
const products = require("./products.json");
const ProductsController = require("./controllers/product.controller");
const ErrorHandler = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } else if (req.url.match(/\/api\/product\/[0-9]+/)) {
    res.end(req.url.split("/").join("   "));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server run on Port ${PORT}`);
});
