const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("welcome to first step");
  // res.send("Hallo wie gehts");
  res.status(200).send({ message: "Alles Gute" });
});
app.get("/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
  ]);
});
//test api protocol://hostname:port/path http://localhost:3000/users
// app.get("/users", (req, res) => {
//   res
//     .status(200)
//     .json([
//       {
//         users: {
//           id: 1,
//           name: "user1",
//           id: 2,
//           name: "user2",
//           id: 3,
//           name: "user3",
//         },
//       },
//     ]);
// });
app.get("/products", (req, res) => {
  res.status(200).json([
    { id: 1, name: "products1" },
    { id: 2, name: "products2" },
    { id: 3, name: "products3" },
  ]);
});
app.listen(3000, () => {
  console.log("server run on port 3000");
});
