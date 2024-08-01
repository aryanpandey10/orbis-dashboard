import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

const DonutChartCard = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Bookings by Agents</CardTitle>
        <Doughnut data={data} />
      </CardBody>
    </Card>
  );
};

export default DonutChartCard;
