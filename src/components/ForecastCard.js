import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const ForecastCard = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Forecasted Revenue</CardTitle>
        <p>${data.target}</p>
      </CardBody>
    </Card>
  );
};

export default ForecastCard;
