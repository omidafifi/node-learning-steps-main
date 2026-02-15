const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb-tutorials";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db(DB_NAME);
  const userCollection = db.collection("user");

  // حذف بر اساس firstName
  const result = await userCollection.findOneAndDelete({
    firstName: "omidreza",
  });

  console.log("Deleted Document =>", result.value);

  await client.close();
}

main();


    // مثال حذف یک سند بر اساس firstName
    // const result = await userCollection.deleteOne({ firstName: "omidreza" });

    // مثال حذف یک سند بر اساس _id
    // const result = await userCollection.deleteOne({
    //   _id: new ObjectId("689c5c1b803c00d4313b141f"),
    // });

    // console.log("Deleted Document => ", result);

