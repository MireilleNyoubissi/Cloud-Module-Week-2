const dotenv = require("dotenv").config();
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
const cors = require("cors");
const port = process.env.PORTCi || 4000;
const express = require("express");
const app = express();
app.use(cors());

//Get all cities

app.get("/cities", async (req, res) => {
  const collection = db.collection("cities");
  const data = await collection.find({}).toArray();

  const cities = data.map((x) => x.city);

  if (cities.length === 0) res.send("Not found").status(404);
  else res.send(cities).status(200);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
