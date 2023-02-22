const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);


const connectDB = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
};
connectDB();
const db = client.db("sentenceapp");

module.exports = db;
