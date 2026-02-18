const fs = require(`fs`);
fs.readFile("inventory.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  const db = JSON.parse(data);
  const newBook = { id: 4, title: "Robayiate Khayam" };
  db.Books.push(newBook);
  console.log(db);
  fs.writeFile("inventory.txt", JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log("addes");
  });
});
