import React, { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";

export class Weather extends Component {
  render() {
    return (
      <Row xs={1} md={2} className="g-4">
        {this.props.weatherData.map((item) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  Weather Forecasting for {this.props.display_name}
                </Card.Title>
                <Card.Text>
                  <li>
                    <strong> Date:</strong> {item.date}
                  </li>
                  <li>
                    <strong> Description:</strong> {item.description}
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Weather;
