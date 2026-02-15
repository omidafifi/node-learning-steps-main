const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");
  const result = await userCollection.insertMany([
    {
      firstName: "Amirreza",
      lastName: "Afifi",
      age: 34,
      skills: [
        "Front-end-developer",
        "Hmtk",
        "Css",
        "Tailwind",
        "TypeScript",
        "React",
      ],
      identity: "123456789876543219",
      birthday: new Date(1991, 10, 26),
      address: [
        {
          province: "fars",
          city: "shiraz",
          street: "Zand-street",
        },
      ],
    },

    {
      firstName: "omidreza",
      lastName: "Afifi",
      age: 34,
      skills: ["back-end-developer", "NodeJS", "MongoDB", "TypeScript"],
      identity: "123456789",
      birthday: new Date(1991, 10, 26),
      address: [
        {
          province: "fars",
          city: "shiraz",
          street: "molasadra-street",
        },
      ],
    },
  ]);
  console.log("Inserted Document => ", result);
  userCollection.count({}).then((count) => {
    console.log(count);
  });
  userCollection.countDocuments({}).then((count) => {
    console.log(count);
  });
}
main();
