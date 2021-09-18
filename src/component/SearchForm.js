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
            <Form.Label>
              {" "}
              <h6>Input City Name</h6>
            </Form.Label>
            <Form.Control type="text" size="lg" placeholder="e.g. Paris" />
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
