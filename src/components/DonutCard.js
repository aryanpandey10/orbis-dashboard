import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const DonutCard = ({ data }) => {
  // Calculate the total bookings
  const totalBookings = data.datasets[0].data.reduce(
    (acc, value) => acc + value,
    0
  );

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#6c757d",
          font: {
            size: 10,
          },
          usePointStyle: true, // Square legend items
        },
      },
      title: {
        display: true,
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#343a40",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const dataIndex = tooltipItem.dataIndex;
            const label = dataset.labels[dataIndex] || "";
            const value = dataset.data[dataIndex];
            return `${label}: ${value} bookings`;
          },
        },
      },
      datalabels: {
        display: false, // Disable default datalabels
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    cutout: "80%", // Adjust the thickness of the donut
  };

  // Custom plugin to draw the total bookings in the center of the doughnut chart
  const centerTextPlugin = {
    id: "centerTextPlugin",
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;

      const { width, height } = chartArea;
      const x = width / 2;
      const y = height / 1.5; // Center vertically

      // Save current context state
      ctx.save();

      // Set the font for total bookings text
      ctx.font = "bold 24px Arial"; // Increased font size for visibility
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";

      // Draw the total bookings
      ctx.fillText(`${totalBookings}`, x, y);

      // Optional: Draw additional text
      ctx.font = "16px Arial"; // Slightly larger font for additional text
      ctx.fillText("Total Bookings", x, y + 30); // Adjust positioning if needed

      // Restore context state
      ctx.restore();
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Bookings by Agent</CardTitle>
        <div style={{ height: "120%", width: "100%", marginTop: "-20px" }}>
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]} // Include the custom plugin
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default DonutCard;
