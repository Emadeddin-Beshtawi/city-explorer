import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class SearchForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={this.props.handleLocation}
          >
            <Form.Label>Input City Name</Form.Label>
            <Form.Control type="text" size="lg" placeholder="e.g. Amman" />
          </Form.Group>
        </Form>{" "}
        <br />
        <Button
          variant="outline-success"
          size="lg"
          type="submit"
          onClick={this.props.handleSubmit}
        >
          Explore!
        </Button>
      </div>
    );
  }
}

export default SearchForm;