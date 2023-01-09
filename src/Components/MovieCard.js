import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { title, description, posterURL, Rate } = props;
  return (
    <>
      <Card style={{ width: "18rem", marginBottom: 70 }}>
        <Link key={title} to={`/description/${title}`}>
          <Card.Img
            variant="top"
            src={posterURL}
            style={{ height: "60vmin", alignItems: "center" }}
          />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
        </Card.Body>
        <Card.Footer style={{ color: "red" }}>
          <Ratings Rate={Rate} />
        </Card.Footer>
      </Card>
    </>
  );
}

export default MovieCard;
