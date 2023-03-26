const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient } = require("mongodb");
const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cloudtwo.gufwzid.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

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

const app = express();
app.use(cors({
  origin: "*",
}));


//Get all adjectives
app.get("/adjectives", async (req, res) => {
  const collection = db.collection("adjectives");
  const data = await collection.find({}).toArray();

  const adjectives = data.map((x) => x.adjective);

  if (adjectives.length === 0) res.send("Not found").status(404);
  else res.send(adjectives).status(200);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
