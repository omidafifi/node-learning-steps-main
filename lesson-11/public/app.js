const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // مسیر فایل بر اساس URL
  let filePath = path.join(__dirname, "public", req.url);

  // اگر کاربر فقط "/" بزنه، index.html باز بشه
  if (req.url === "/") {
    filePath = path.join(__dirname, "public", "index.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - File Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
