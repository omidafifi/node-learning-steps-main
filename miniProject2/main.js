const fs = require("fs");
fs.readFile("inventory.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(JSON.parse(data));
});


// const PORT = 3000;
// const http = require(`http`);
// const server = http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write.res.end();
//   })

//   .listen(`${PORT}`, () => {
//     console.log(`Server run on Port ${PORT}`);
//   });
