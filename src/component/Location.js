import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div>
        <h4>
          City Name and Address:<u> {this.props.display_name} </u>
        </h4>
        <p>
          {" "}
          <strong>Latitude:</strong> {this.props.lat} <br />
          <strong> Longitude:</strong> {this.props.lon}{" "}
        </p>
        <div>
          <img src={this.props.map} alt="Map" className="img-responsive" />
        </div>
      </div>
    );
  }
}

export default Location;