import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    getMovie(search);
    setSearch("");
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search Movie"
              value={search}
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
    </>
  );
};
