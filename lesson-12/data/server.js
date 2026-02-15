const http = require("http");
const products = require("./product.json");
const ProductsController = require("./controllers/product.controllers");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    ProductsController.get(res, req);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
