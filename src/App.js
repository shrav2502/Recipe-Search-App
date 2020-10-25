import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { Button } from "reactstrap";
import ErrorBoundary from "./ErrorBoundary";
import errorimg from "./error.png";

function App() {
  const APP_KEY = "c8025174d0bd47c5a81cb497f09dad6f";

  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    api();
  }, [query]);

  const api = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}`
    );
    if (response.status === 402) {
      setError(true);
    }
    console.log(response);
    const data = await response.json();
    setRecipe(data.results);
    isLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  const styleRecipeItems = {
    display: "grid",
    gridTemplateColumns: "400px 400px 400px ",
    marginTop: "80px",
  };

  const styleBody = {
    marginTop: "0",
    padding: "0",
    width: "1200px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const styleInput = {
    border: "none",
    borderBottom: "2px solid gold",
    width: "500px",
    height: "50px",
  };

  const styleForm = {
    height: "70px",
    backgroundColor: "white",
    padding: "5px",
  };

  const styleNavbar = {
    top: "0",
    position: "fixed",
    width: "1200px",
    height: "100px",
  };

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={errorimg}
          alt="img"
          style={{ height: "400px", width: "450px" }}
        />
        <h3>You have reached your daily API request limit</h3>
      </div>
    );
  }

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="App" style={styleBody}>
      <div style={{ styleNavbar }}>
        <form
          className="recipe-submit"
          onSubmit={handleSubmit}
          style={styleForm}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styleInput}
          />
          <Button color="warning" style={{ marginLeft: "5px" }}>
            Search
          </Button>
        </form>
      </div>

      <div style={styleRecipeItems}>
        {recipe.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
