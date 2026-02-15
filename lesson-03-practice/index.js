// Http is working in web 1 and web 2
const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This response is end");
  })
  .listen(3000, () => {
    console.log("Server run on the port 3000:http://localhost:3000");
  });
