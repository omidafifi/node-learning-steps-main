/// انواع مختلف content type صفحات

const http = require("http");
http
  .createServer(function (request, response) {
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.writeHead(200, { "Content-Type": "text/html" });
    response.writeHead(200, { "Content-Type": "text/xml" });
    // response.writeHead(200, { "Content-Type": "application/json" }); // jason dorost neveshte shavad hatman
    // response.end("<h1>Hello NodeJs</h1>"); // inja hatman bayad tag h1 dar double cotation bashe
    // response.write(
    //   JSON.stringify({ firstName: "Omidreza", lastName: "Afifi" })
    // );
    response.write("<XML><KEY>Bank</KEY></XML>");
    response.end();
  })
  .listen(3000, () => {
    console.log("Click here to join localhost:http://localhost:3000"); // : and localhost
  });
