const http = require("http");
const PORT = 3000;
const server = http
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      res.write("Welcome to my first nodeJs server");
      res.end();
    } else if (req.method === "GET" && req.url === "/posts") {
      res.write("Welcome to Posts page");
      res.end();
    } else if (req.method === "GET" && req.url === "/books") {
      res.write("Welcome to Books page");
      res.end();
    } else if (req.method === "GET" && req.url === "/users") {
      res.write("Welcome to Users list page");
      res.end();
    } else {
      res.write("Api Not Found");
      res.end();
    }
  })
  .listen(`${PORT}`, () => {
    console.log(`Server run on Port ${PORT}`);
  });
