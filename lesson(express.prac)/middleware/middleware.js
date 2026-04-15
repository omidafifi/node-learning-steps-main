const express = require("express");
const app = express();
app.use(
  function (req, res, next) {
    console.log("Log Number 1 ");
    next();
  },
  function (req, res, next) {
    console.log("Log Number 2 ");
    next();
  },
  function (req, res, next) {
    console.log("Log Number 3 ");
    next();
  },
);

app.get("/", (req, res) => {
  res.send("TEST RESPONSE");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
