const fs = require("fs");
fs.readFile("inventory.txt", (err, data) => {
  if (err) {
    throw err;
  }
  const db = JSON.parse(data);
  const newBook = { id: 5, title: "Samfoni Mordegan" };
  db.Books.push(newBook);
  console.log(db);
  fs.writeFile("inventory.txt", JSON.stringify(db), (err) => {
    if (err) {
      throw err;
    }
    console.log("new Book added");
  });
});
