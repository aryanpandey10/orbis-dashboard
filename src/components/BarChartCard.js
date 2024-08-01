import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

// Static color mapping
const colors = {
  US: "#7C00FE",
  UK: "#F5004F",
  Canada: "#F9E400",
};

const BarChartCard = ({ title, data }) => {
  // Extract unique countries from data
  const countries = [...new Set(data.map((item) => item.country))];

  return (
    <Card className="bar-chart-card">
      <CardHeader title={title} />
      <CardContent>
        <div style={{ height: 300, width: "100%" }}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            {countries.map((country) => (
              <Bar
                key={country}
                dataKey="bookings"
                fill={colors[country] || "#8884d8"} // Default color if country not found
                data={data.filter((item) => item.country === country)} // Filter data by country
              />
            ))}
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
