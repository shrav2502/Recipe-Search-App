import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

function Recipe({ title, image, id }) {
  return (
    <Link to={`/details/${id}`}>
      <Card className="recipe-container">
        <div style={{ textAlign: "center" }}>
          <img src={image} style={{ height: "310px", width: "380px" }} />
        </div>
        <h5>{title}</h5>
      </Card>
    </Link>
  );
}

export default Recipe;
