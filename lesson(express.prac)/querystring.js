const express = require("express");
const app = express();
const queryString = require("querystring"); //  و آن رو call کنی این رو کلا یادت رفت که یک core module هست
const posts = require("./post.json");

app.get("/foo/", (req, res) => {
  console.log(queryString.parse("key=value&ket2=value2&key3=value3"));
  console.log(
    queryString.stringify({
      key: "value",
      ket2: "value2",
      key3: "value3",
      key4: "value4",
    }),
  );
  res.send(req.query);
});
//حالا در این قسمت میخوایم یاد بگیریم که جحوری توسط query string ما بریم عملیات سرچ کردن رو انجام بدیم
app.get("/blogs", (req, res) => {
  const { description } = req.query; //{description}
  const regexDescription = new RegExp(description ?? "", "gi");
  const filter = posts.filter((post) =>
    post.description.match(regexDescription),
  );
  res.send({ posts: filter });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
