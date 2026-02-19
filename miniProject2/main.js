const fs = require("fs");
fs.readFile("inventory.txt", (err, data) => {
  if (err) {
    throw err;
  }
  const db = JSON.parse(data);
  console.log(db);
  const newBook = { id: 5, title: "Ashare babataher" };
  db.Books.push(newBook);
  fs.writeFile("inventory.txt", JSON.stringify(db), (err) => {
    if (err) {
      throw err;
    }
    console.log("file addes successfully");
  });
});
