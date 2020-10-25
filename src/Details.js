import React, { useEffect, useState } from "react";

function Details({ match }) {
  const [item, setItem] = useState({
    dishTypes: [],
    extendedIngredients: [],
    diets: [],
  });

  const APP_KEY = "c8025174d0bd47c5a81cb497f09dad6f";
  useEffect(() => {
    recipeInfo();
  }, []);

  const recipeInfo = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${APP_KEY}&includeNutrition=false`
    );
    const data = await response.json();
    console.log(data);
    setItem(data);
  };

  const detailsContainer = {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
  };

  const styleLeftSide = {
    overflow: "auto",
    height: "700px",
    width: "800px",
  };

  const styleIngredients = {
    display: "flex",
    justifyContent: "space-between",
  };

  const styleRightSIde = {
    width: "700px",
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

  const styleSummary = {
    lineHeight: "4px",
  };

  const styleImage = {
    width: "600px",
    height: "400px",
  };

  return (
    <div className="details-container" style={detailsContainer}>
      <div style={styleLeftSide}>
        <div style={{ textAlign: "center" }}>
          <img src={item.image} style={styleImage} />
        </div>
        <div style={styleHeader}>
          <h2>{item.title}</h2>
          <h2>{item.readyInMinutes} mins</h2>
        </div>
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
        <div
          dangerouslySetInnerHTML={{
            __html: item.summary,
          }}
        ></div>
      </div>
      <div style={styleRightSIde}>
        <h1>ingredients</h1>
        {item.extendedIngredients.map((item) => (
          <ul key={item.name}>
            <li style={styleIngredients}>
              <span>{item.name}</span>
              <span>{`${item.measures.us.amount} ${item.measures.us.unitShort}`}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Details;
