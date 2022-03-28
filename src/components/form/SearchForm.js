import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("got the search value, now get the movie from api");
  };

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
        <Col className=" d-flex justify-content-center">
          <CustomCard />
        </Col>
      </Row>
    </>
  );
};
