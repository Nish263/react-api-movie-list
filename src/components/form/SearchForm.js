import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { fetchMovie } from "../helper/AxiosHelper";

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const movie = await fetchMovie(search);

    console.log(movie);
    setMovie(movie.data);
  };

  console.log(movie);
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search Movie"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Button variant="warning" type="submit" value="search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className=" d-flex justify-content-center mt-3">
          {movie.Response === "True" && <CustomCard movie={movie} />}

          {movie.Response === "False" && (
            <Alert variant="danger"> {movie.Error}</Alert>
          )}
        </Col>
      </Row>
    </>
  );
};
