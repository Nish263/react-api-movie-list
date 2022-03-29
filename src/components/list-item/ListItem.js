import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export const ListItem = ({ movie, fun, btnDelete }) => {
  return (
    <Row>
      <Col>
        <img src={movie?.Poster} width="100%" alt="" />
      </Col>
      <Col>
        <h3>Title: {movie?.Title}</h3>
        <h3>Rating: {movie?.imdbRating}</h3>
        <h3>Rating:Year: {movie?.Year}</h3>
        <h3>Rating: Genre: {movie?.Genre}</h3>

        <div className="d-grid gap-2">
          <Button variant="danger" size="lg" onClick={() => fun(movie.imdbID)}>
            Delete
          </Button>
        </div>
      </Col>
    </Row>
  );
};
