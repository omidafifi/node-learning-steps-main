const http = require("http");
const { stringify } = require("querystring");
const PORT = 3000;
const server = http
  .createServer((req, res) => {})
  .listen(`${PORT}`, () => {
    console.log(`Server run on Port ${PORT}`);
  });
