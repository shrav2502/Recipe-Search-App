import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle } from "reactstrap";

function Recipe({ title, image, id }) {
  return (
    <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
      <Card className="recipe-container">
        <div style={{ textAlign: "center" }}>
          <CardImg src={image} style={{ height: "310px", width: "380px" }} />
        </div>
        <CardTitle
          style={{
            color: "#444A4B",
            fontFamily: "Roboto Slab",
            fontWeight: "bold",
            fontSize: "21px",
          }}
        >
          {title}
        </CardTitle>
      </Card>
    </Link>
  );
}

export default Recipe;
