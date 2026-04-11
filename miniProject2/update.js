const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_name = "mongodb-toturials";

const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("connected to mongodb");

  const db = client.db(DB_name);
  const userCollection = db.collection("user");

  const result = await userCollection.updateOne(
    { _id: new ObjectId("69d64963b98ec963dc60c911") },
    { $push: { skills: "Französich" } },
  );

  console.log("Aktuilisiertes Resultat wird geschriben : ==>", result);
}

main();
