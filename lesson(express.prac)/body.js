const express = require("express");
const app = express();

// فعال‌سازی middlewareهای body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.patch("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
