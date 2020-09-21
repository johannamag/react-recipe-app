import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const apiId = "a5ea7377";
  const apiKey = "163be883c7ec91ffbcda762a03403b06";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}`
    );
    const data = response.json();
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
