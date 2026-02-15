const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");
  const result = await userCollection.insertOne({
    firstName: "omidreza",
    lastName: "Afifi",
    age: 34,
    skills: ["back-end-developer", "NodeJS", "MongoDB", "TypeScript"],
    identity: "123456789",
    birthday: new Date(26, 11, 1991),
    adress: {
      province: "fars",
      ciry: "shiraz",
      street: "molasadra-street",
    },
  });
  console.log("Inserted Document => ", result);
  userCollection

    .find({})
    .toArray()
    .then((res) => {
      console.log(res);
    });
}
main();
