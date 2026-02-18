const fs = require("fs");
fs.readFile("inventory.txt", "utf-8", (error, data) => {
  if (error) {
    throw error;
  }
  const db = JSON.parse(data);
  const newBook = { id: 4, title: "Masnavi" };
  db.Books.push(newBook);
  console.log(db);
  fs.writeFile("inventory.txt", JSON.stringify(db), (err) => {
    if (err) {
      throw err;
    }
    console.log("New books added in our history :");
  });
});
