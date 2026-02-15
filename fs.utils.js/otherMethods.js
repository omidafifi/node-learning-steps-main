//other methods
const fs = require("fs");
// fs.appendFile("write.txt", "new data appended", "utf-8", (err) => {
//   console.log(err);
// });
// fs.appendFileSync("write.txt", "new data appended", "utf-8", console.log(err));

const CheckExist = fs.existsSync("file.txt");
if (CheckExist) {
  console.log(CheckExist);
  //   fs.unlink("file.txt", (err) => {
  //     if (err) console.log(err);
  //   });
  fs.unlinkSync("file.txt");
} else {
  console.log("not found file");
}
