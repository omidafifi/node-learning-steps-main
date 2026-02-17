const fs = require("fs");
fs.readFile("inventory.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  const db = JSON.parse(data);
  const newBook = { id: 4, title: "Masanbavi" };
  db.Books.push(newBook);
  console.log(db);
  fs.writeFile("inventory.txt", JSON.stringify(db), (err) => {
    if (err) {
      throw err;
    }
    console.log("New books added in our history :");
  });
});
