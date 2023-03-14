import React, { useState, useEffect } from "react";
import "./App.css";
require("dotenv").config();


function App() {
  
   const [city, setCity] = useState([]);
   const [adjective, setAdjective] = useState([]);

  
   
   const fetchDataCities = async () => {
    const response = await fetch("http://localhost:4000/cities");
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

 

  useEffect(() => {
    fetchDataCities()
      .then((res) => {
        setCity(res[Math.floor(Math.random() * res.length)])
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  //****************
  
  const fetchDataAdjectives = async () => {
    
    const response = await fetch("http://localhost:5000/adjectives");
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchDataAdjectives()
      .then((res) => {
        setAdjective(res[Math.floor(Math.random() * res.length)]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="center-screen">
      <h1>Sentences App</h1>
      <p>
        {city} is {adjective}
      </p>
    </div>
  );
}

export default App;
