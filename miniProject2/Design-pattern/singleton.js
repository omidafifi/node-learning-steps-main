const { MongoClient } = require("mongodb");

class connectToMongoDB {
  #DB_URL = "mongodb://localhost:27017/mongodb-toturials";
  #db = null;
  async connect() {
    try {
      let client = new MongoClient(this.#DB_URL);
      let db = client.db();
      return db;
    } catch (error) {
      console.log(error.message);
    }
  }
  async Get() {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }
}
