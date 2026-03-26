const http = require("http");
const PORT = 3000;
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Wellcome" }));
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "About Page" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  })
  .listen(`${PORT}`, () => {
    console.log(`Server run on Port ${PORT}`);
  });



  
// res.end({ message: "Hi Omid" });
// const products = require("./products.json");
// res.writeHead(200, { "Content-Type": "application/json" });
// res.end(JSON.stringify(products));
