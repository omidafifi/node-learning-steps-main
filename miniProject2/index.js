const fs = require("fs");

// ۱. روش غیرهمزمان (Async) - Node.js منتظر نمی‌ماند
fs.readFile("users.txt", "utf8", (error, data) => {
  if (error) {
    console.log("خطا در روش اول:", error.message);
    return;
  }
  console.log("محتوای فایل (غیرهمزمان):", data);
});

console.log("۱. این لاگ زودتر از نتیجه فایل غیرهمزمان چاپ می‌شود");

// ---

// ۲. روش همزمان (Sync) - Node.js اینجا متوقف می‌شود تا فایل خوانده شود
try {
  const data = fs.readFileSync("users.txt", "utf8");
  console.log("محتوای فایل (همزمان):", data);
} catch (error) {
  console.log("خطا در روش دوم:", error.message);
}

console.log("۲. این لاگ حتماً بعد از خواندن کامل فایل چاپ می‌شود");