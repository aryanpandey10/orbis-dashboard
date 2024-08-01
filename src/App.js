import React from "react";
import { Container, Row, Col } from "reactstrap";
import DealWonCard from "./components/DealWonCard";
import ForecastCard from "./components/ForecastCard";
import DonutCard from "./components/DonutCard";
import AgentRankingCard from "./components/AgentRankingCard";
import AgentTableCard from "./components/AgentTableCard";
import SquareCard from "./components/SquareCard";
import BarChartCard from "./components/BarChartCard";
import {
  dealData,
  forecastData,
  donutData,
  rankingData,
  agentData,
  paymentData,
} from "./data";
import "./App.css"; // Import custom CSS

function App() {
  return (
    <Container fluid className="app-container">
      <Row className="header-row mb-2">
        <Col className="header text-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <img
                src="https://orbisvacation.us/img/img_orbis_logo.webp"
                alt="Logo"
                height="40"
              />
            </div>
            <div className="logout">
              {new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="content flex-grow-1">
        <Col lg="2" className="d-flex flex-column gap-3">
          <DealWonCard data={dealData} />
          <ForecastCard data={forecastData} />
          <div className="doughnut-chart-container">
            <DonutCard data={donutData} />
          </div>
        </Col>
        <Col lg="6" className="d-flex flex-column gap-3">
          <AgentRankingCard data={rankingData} />
          <AgentTableCard data={agentData} />
        </Col>
        <Col lg="4" className="d-flex flex-column gap-3">
          <Row className="mb-4">
            <Col lg="6" className="mb-3">
              <SquareCard title="Number of Inquiries" value="24" />
            </Col>
            <Col lg="6" className="mb-3">
              <SquareCard title="New Customer" value="89" />
            </Col>
            <Col lg="6" className="mb-3">
              <SquareCard title="Total Payment" value="7921" />
            </Col>
            <Col lg="6" className="mb-3">
              <SquareCard title="Due Payment" value="8992" />
            </Col>
          </Row>
          <Row className="gap-3">
            <Col lg="12">
              <BarChartCard title="Booking Country" data={paymentData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
