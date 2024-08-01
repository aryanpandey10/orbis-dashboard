import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DealWonCard = ({ data }) => {
  const value = data.value || 0; // Current value
  const target = data.target || 33; // Target value

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Deal Won vs Target</CardTitle>
        <div style={{ height: 200, width: "100%" }}>
          <Gauge
            value={(value / target) * 100} // Convert to percentage for the gauge
            min={0}
            max={100} // 100% completion
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value }) =>
              `${Math.round((value / 100) * target)} / ${target}`
            }
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default DealWonCard;
