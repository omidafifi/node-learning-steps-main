const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_name = "mongodb-toturials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const users = await userCollection.find({ age: 30 }).toArray();
  console.log(users);
}
main();
