import React from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

const AgentTableCard = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Agent Details</CardTitle>
        <Table striped>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Bookings</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((agent, index) => (
              <tr key={index}>
                <td className="d-flex align-items-center">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  {agent.name}
                </td>
                <td>{agent.bookings}</td>
                <td>${agent.profit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default AgentTableCard;
