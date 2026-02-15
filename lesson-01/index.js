//Initialize Node.js project with basic index.js and package.json
// console.log("Hello NodeJs");

setTimeout(() => {
  console.log("NodeJs Time out");
}, 500);

console.log(global);
console.log(globalThis);
//Both of them are ===
//feat: Demonstrate usage of global and globalThis objects in Node.js

// - Added setTimeout example to show asynchronous callback execution
// - Logged `global` and `globalThis` to illustrate their equivalence in Node.js runtime

const fs = require("fs");
const data = fs.readFileSync(`/file.md`); // blocks here until file is read
console.log(data); // will run aftar console.log
moreWork();

const fs = require(`fs`);
fs.readFile(`/file.md`, (err, data) => {
  //Asynchronous code
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run befor console.log

//Sync and Asynchronous
