import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-3">
        <Card.Img variant="top" src={movie?.Poster} />
        <Card.Body>
          <Card.Title>Title: {movie?.Title}</Card.Title>
          <Card.Title>Rating: {movie?.imdbRating}</Card.Title>
          <Card.Title>Year: {movie?.Year}</Card.Title>
          <Card.Title> Genre: {movie?.Genre}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="info">Happy</Button>
            <Button variant="secondary">Lazy movie</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
