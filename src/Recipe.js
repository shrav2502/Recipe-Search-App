import React from "react";
import { Link } from "react-router-dom";

function Recipe({ title, image, id }) {
  return (
    <Link to={`/details/${id}`}>
      <div className="recipe-container">
        <img src={image} style={{ height: "330px", width: "350px" }} />
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

export default Recipe;
