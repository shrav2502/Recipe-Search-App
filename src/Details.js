import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function Details({ match }) {
  const [item, setItem] = useState({
    dishTypes: [],
    extendedIngredients: [],
    diets: [],
    analyzedInstructions: [],
  });
  const [error, setError] = useState(false);

  const APP_KEY = "c8025174d0bd47c5a81cb497f09dad6f";
  useEffect(() => {
    recipeInfo();
  }, []);

  const recipeInfo = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${APP_KEY}&includeNutrition=false`
    );
    if (response.status === 404) {
      setError(true);
    }
    const data = await response.json();
    setItem(data);
    console.log(data);
  };

  const detailsContainer = {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
  };

  const styleLeftSide = {
    overflow: "auto",
    height: "685px",
    width: "750px",
    display: "flex",
    flexDirection: "column",
  };

  const styleIngredients = {
    display: "flex",
    justifyContent: "space-between",
    padding: "4px",
    border: "1px solid #DCDCDC",
    borderRadius: "2px",
  };

  const styleRightSIde = {
    width: "730px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    overflow: "auto",
    height: "700px",
  };

  const styleType = {
    padding: "4px ",
    borderRadius: "5px",
    backgroundColor: "red",
    color: "white",
    width: "fitContent",
    margin: "0px 3px 0px 3px",
  };

  const styleDiet = {
    padding: "4px ",
    borderRadius: "5px",
    backgroundColor: "green",
    color: "white",
    width: "fitContent",
    margin: "0px 3px 0px 3px",
  };

  const styleHeader = {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  };

  const styleImage = {
    width: "600px",
    height: "400px",
  };

  const styleModal = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const styleFont = {
    fontFamily: "Roboto Slab",
  };

  const styleBack = {
    height: "30px",
    width: "5%",
    textAlign: "right",
    marginLeft: "40px",
  };

  if (error) {
    return (
      <h4>
        Oops! something went wrong! Go back to <Link to="/">Home Page</Link>
      </h4>
    );
  }

  return (
    <div style={{ fontFamily: "Roboto Slab" }}>
      <div style={styleBack}>
        <Link to="/">Back</Link>
      </div>
      <div className="details-container" style={detailsContainer}>
        <div style={styleLeftSide}>
          <div style={{ textAlign: "center" }}>
            <img src={item.image} style={styleImage} />
          </div>
          <div style={styleHeader}>
            <h4>{item.title}</h4>
            <h4>{item.readyInMinutes} mins</h4>
          </div>
          <div>
            By <a href={item.sourceUrl}>{item.creditsText}</a>
          </div>
          <br />
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {item.diets.map((diet) => (
              <div key={diet} style={styleDiet}>
                {diet}
              </div>
            ))}
            {item.dishTypes.map((type) => (
              <div key={type} style={styleType}>
                {type}
              </div>
            ))}
          </div>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: item.summary,
            }}
          ></div>
        </div>
        <div style={styleRightSIde}>
          <div style={styleModal}>
            <h3 style={styleFont}>Ingredients</h3>
            <Modal instructions={item.analyzedInstructions} />
          </div>
          <div>
            {item.extendedIngredients.map((item) => (
              <ul key={item.name} style={{ padding: "0" }}>
                <li style={styleIngredients}>
                  <span>{item.name}</span>
                  <span>{`${item.measures.us.amount} ${item.measures.us.unitShort}`}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
