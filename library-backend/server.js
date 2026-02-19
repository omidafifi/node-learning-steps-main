const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === `/api/users`) {
    fs.readFile("db.json", "utf-8", (err, db) => {
      if (err) {
        throw err;
      }

      const parsedDb = JSON.parse(db);
      console.log(parsedDb.users);
    });
  }
});

server.listen(3000, () => {
  console.log("Server runing on port 3000");
});
