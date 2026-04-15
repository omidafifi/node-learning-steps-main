const express = require("express");
const querystring = require("querystring"); // ✅ Node.js Core Module
const posts = require("./post.json");

const app = express();

/* -----------------------------
   QueryString demo
------------------------------ */
app.get("/foo", (req, res) => {
  // parse → string  ➜  object
  const parsed = querystring.parse("key=value&key2=value2&key3=value3");

  // stringify → object ➜ string
  const stringified = querystring.stringify({
    key: "value",
    key2: "value2",
    key3: "value3",
    key4: "value4",
  });

  console.log("Parsed:", parsed);
  console.log("Stringified:", stringified);

  // Express خودش query string رو parse می‌کنه
  res.status(200).json(req.query);
});

/* -----------------------------
   Search with Query String
   /blogs?description=react
------------------------------ */
app.get("/blogs", (req, res) => {
  const { description = "" } = req.query;

  const regex = new RegExp(description, "i");

  const filteredPosts = posts.filter((post) => regex.test(post.description));

  res.status(200).json({
    count: filteredPosts.length,
    posts: filteredPosts,
  });
});

/* -----------------------------
   Server
------------------------------ */
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
