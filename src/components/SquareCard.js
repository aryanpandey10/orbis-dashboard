// src/components/SquareCard.js
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const SquareCard = ({ title, value }) => {
  return (
    <Card className="square-card">
      <CardBody className="text-center">
        <CardTitle tag="h5">{title}</CardTitle>
        <h2>{value}</h2>
      </CardBody>
    </Card>
  );
};

export default SquareCard;
