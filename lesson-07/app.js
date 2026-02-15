// create directory
const fs = require("fs");
const path = require("path");

// ساخت پوشه توسط ماژول fs
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) {
    console.log("خطا در ساخت پوشه:", err);
  } else {
    console.log("پوشه ساخته شد ✅");
  }
});

// write file
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "سلام دنیا",
  "utf8",
  (err) => {
    if (err) {
      console.log("خطا در نوشتن فایل:", err);
    } else {
      console.log("فایل ساخته/بازنویسی شد ✅");
    }
  }
);

// append file
fs.appendFile(
  path.join(__dirname, "test", "test.txt"),
  "\nاین متن به انتها اضافه شد",
  "utf8",
  (err) => {
    if (err) {
      console.log("خطا در افزودن متن:", err);
    } else {
      console.log("متن به فایل اضافه شد ✅");
    }
  }
);

// read file
fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (err, data) => {
  if (err) {
    console.log("خطا در خواندن فایل:", err);
  } else {
    console.log("محتوای فایل:", data);
  }
});

// rename file
fs.rename(
  path.join(__dirname, "test", "test.txt"),
  path.join(__dirname, "test", "newName.txt"),
  (err) => {
    if (err) {
      console.log("خطا در تغییر نام:", err);
    } else {
      console.log("نام فایل تغییر کرد ✅");
    }
  }
);
