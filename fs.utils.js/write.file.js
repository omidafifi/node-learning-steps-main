const fs = require("fs");
let data = "Hello new file ! \n";

// fs.writeFile("write.txt", data, (err) => {
//   if (err) console.log(err);
//   else console.log("write file is done");
// });

// fs.writeFile("write.txt", data, { flag: "a", encoding: "utf8" }, (err) => {
//   if (err) console.log(err);
//   else console.log("write file is done");
// });
fs.writeFileSync("write.txt", data);
