const http = require(`http`);
const { CLIENT_RENEG_LIMIT } = require("tls");
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hi");
  })
  .listen(3000, () => {
    console.log("Click here http://localhost:3000");
  });
// console.log("Server run ");
