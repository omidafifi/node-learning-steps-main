const http = require("http");
const PORT = 3000;
const products = require("./products");
const server = http
  .createServer((req, res) => {
    if (req.url === "/api/products" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(products));
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Rout not Found" }));
    }
  })
  .listen(`${PORT}`, () => {
    console.log(`Server run on Port ${PORT}`);
  });

  