const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "List of users" }));
  } else if (req.method === "POST" && req.url === "/users") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User created" }));
  } else if (req.method === "PUT" && req.url === "/users/1") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User updated" }));
  } else if (req.method === "DELETE" && req.url === "/users/1") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User deleted" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// .........
const express = require("express");
const app = express();

app.use(express.json());

// GET
app.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

// POST
app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created", data: req.body });
});

// PUT
app.put("/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} updated`, data: req.body });
});

// PATCH
app.patch("/users/:id", (req, res) => {
  res.json({
    message: `User ${req.params.id} partially updated`,
    data: req.body,
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
