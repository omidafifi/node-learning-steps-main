const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb-tutorials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("Connected to mongodb");
  const db = client.db(DB_NAME);
  const userCollection = db.collection("user");
  const users = await userCollection.find({ skills: "TypeScript" }).toArray();
  console.log(users);
}
main();
