const http = require("http");
const { stringify } = require("querystring");
const PORT = 3000;
const server = http
  .createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    if (req.method === "GET" && req.url === "/") {
      // res.write("Welcome to my first nodeJs server");
      // res.end();
       res.write(
        JSON.stringify([
          {
            id: 1,
            firstName: "omidrzaf",
            lastName: "Afifi",
            age: 35,
          },
        ]),
      );
      //CRUD Creat (C) Read (R) Update(U) Delete(D)
      res.end();
    } else if (req.method === "GET" && req.url === "/posts") {
      res.write("Welcome to Posts page");
      res.end();
    } else if (req.method === "GET" && req.url === "/books") {
      res.write("Welcome to Books page");
      res.end();
    } else if (req.method === "POST" && req.url === "/books") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify([{ message: "New Books created Successfully" }]),
      );
      res.end();
    } else if (req.method === "GET" && req.url === "/users") {
      res.write("Welcome to Users list page");
      res.end();
    } else {
      res.write(` ${req.url} Api Not Found`);
      res.end();
    }
  })
  .listen(`${PORT}`, () => {
    console.log(`Server run on Port ${PORT}`);
  });
