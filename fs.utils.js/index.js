const fs = require("fs");
//blocking code and nonBlocking code

// ==>nonBlocking
// console.log("first  log");
// fs.readfile("package.json", "utf8", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("second log");

// ==> Bocking Code
console.log("first log");
const data = fs.readFileSync("package.json", "utf8");
console.log(data);
console.log("second log");
