const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Home Page" }));
  } else if (req.url === "/products") {
    fs.readFile("./products.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Server Error" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server run on Port ${PORT}`);
});

// res.writeHead(200, { "Content-Type": "application/json" });
// res.end(JSON.stringify(products));
  // .createServer((req, res) => {
  //   if (req.url === "/api/products" && req.method === "GET") { // مسیر درخواست کاربر (URL)
  //     res.writeHead(200, { "content-type": "application/json" }); // برای ارسال یک پاسخ متنی به مرورگر 
  //     res.end(JSON.stringify(products));
  //   } else {
  //     res.writeHead(404, { "content-type": "application/json" });
  //     res.end(JSON.stringify({ message: "Rout not Found" }));
  //   }
  // })
  // .listen(`${PORT}`, () => {
  //   console.log(`Server run on Port ${PORT}`);
  // });

  