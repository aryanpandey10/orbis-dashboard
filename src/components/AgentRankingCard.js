import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./AgentRankingCard.css"; // Import the CSS file

const AgentRankingCard = ({ data }) => {
  // Function to get the border color based on ranking
  const getBorderColor = (index) => {
    switch (index) {
      case 0:
        return "gold";
      case 1:
        return "silver";
      case 2:
        return "bronze";
      default:
        return "gray";
    }
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Top Agents</CardTitle>
        <ListGroup className="d-flex flex-row justify-content-around">
          {data.map((agent, index) => (
            <ListGroupItem
              key={index}
              className="d-flex flex-column align-items-center agent-list-item"
              style={{
                border: `3px solid ${getBorderColor(index)}`,
                borderRadius: "10px",
                padding: "15px",
                width: "30%",
              }}
            >
              <div className={`crown crown-${index + 1}`}>
                <i className="bi bi-award-fill"></i>
              </div>
              <img
                src={agent.photo}
                alt={agent.name}
                className="rounded-circle"
                style={{
                  border: `3px solid ${getBorderColor(index)}`,
                  marginBottom: "10px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div className="text-center">
                <h6>{agent.name}</h6>
                <p>Bookings: {agent.bookings}</p>
                <p>Profit: ${agent.profit}</p>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default AgentRankingCard;
