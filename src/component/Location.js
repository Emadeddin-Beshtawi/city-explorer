import React, { Component } from "react";
import { Row, Table, Col, Image, Container } from "react-bootstrap";

export class Location extends Component {
  render() {
    return (
      <Container>
        <h4>City Name: {this.props.display_name}</h4>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.lat}</td>
              <td>{this.props.lon}</td>
            </tr>
          </tbody>
        </Table>

        <Row>
          <Col xs={6} md={4}>
            <Image src={this.props.map} rounded />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Location;
