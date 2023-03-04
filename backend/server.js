const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors");
const db = require("./config/db");
const port = process.env.PORT || 5000;
  
const app = express()
app.use(cors());

//Get all cities

app.get("/cities", async (req, res) => {
  const collection = db.collection("cities");
  const data = await collection.find({}).toArray();
  
  const cities = data.map(x => x.city)

  if (cities.length === 0) res.send("Not found").status(404);
  else res.send(cities).status(200);
});


//Get all adjectives
app.get("/adjectives", async(req, res) => {
  const collection = db.collection("adjectives");
  const data = await collection.find({}).toArray();
  
  const adjectives = data.map(x => x.adjective)

    if (adjectives.length === 0) res.send("Not found").status(404);
    else res.send(adjectives).status(200);
    
});

app.listen(port, () => console.log(`Server started on port ${port}`));