const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === `/api/users`) {
    fs.readFile("db.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      const db = JSON.parse(data.users);
      console.log(db);
    });
  }
});

server.listen(3000, () => {
  console.log("Server runing on port 3000");
});
