import React from "react";
import { Col, Row, Button, ButtonGroup } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete, handleOnSelect }) => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3 ">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning" onClick={() => handleOnSelect()}>
              All
            </Button>
            <Button variant="primary" onClick={() => handleOnSelect("happy")}>
              HAPPY
            </Button>
            <Button variant="danger" onClick={() => handleOnSelect("lazy")}>
              LAZY
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="secondary">GRID</Button>
            <Button variant="primary">LIST</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          {movieList.map((movie, i) => (
            <CustomCard
              key={i}
              movie={movie}
              btnDelete={true}
              fun={handleOnDelete}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};
