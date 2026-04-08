const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_name = "mongodb-toturials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const result = await userCollection.insertMany([
    {
      firstName: "omidreza",
      lastName: "afifi",
      age: 34,
      skills: ["HTML", "CSS", "JAVASCRIPT", "NodeJs"],
    },
    {
      firstName: "Zahra",
      lastName: "Yazdanpanahi",
      age: 30,
      skills: ["Matemathik", "Englisch", "Deutsch"],
    },
  ]);
  userCollection
    .find({})
    .toArray()
    .then((res) => {
      console.log(res);
    });
  console.log(result);
}
main(); //call main
