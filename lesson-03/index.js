//Core Modules (http)

const http = require("http");

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.end("Server is running");
  })
  .listen(3000, () => {
    console.log("Server run on port 3000 : http://localhost:3000");
  });

  //❓ Nodemon چیست؟

// nodemon یک ابزار توسعه برای Node.js هست که کمک می‌کنه وقتی در فایل‌ها تغییری ایجاد می‌کنی، سرور اتوماتیک ری‌استارت بشه. دیگه لازم نیست هربار خودت Ctrl + C بزنی و دوباره node index.js بنویسی.
