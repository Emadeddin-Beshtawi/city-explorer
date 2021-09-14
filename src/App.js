import React, { Component } from "react";

///// We need to import Bootstrap ////////
import "bootstrap/dist/css/bootstrap.min.css";


///// We need to import axios ////////
import axios from "axios";

///// We need to import supported SearchForm Component ////////
import SearchForm from "./component/SearchForm";

///// We need to import supported Location Component ////////
import Location from "./component/Location";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      map: "",
      weatherData: [],
      showData: false,
    };
  }

  /////// handle-location function ///////////

  handleLocation = (z) => {
    const display_name = z.target.value;
    this.setState({
      display_name: display_name,
    });
  };

  /////// handle-submit function ///////////

  handleSubmit = (z) => {
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    z.preventDefault();
    const config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`,
    };

    /////The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call.//////

    ////Axios is a promise based HTTP client for the browser and Node.js.////

    axios(config)
      .then((y) => {
        const responseData = y.data[0];
        this.setState({
          display_name: responseData.display_name,
          lat: responseData.lat,
          lon: responseData.lon,

          map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=1-18`,

          showData: true,
        });
      })
      .then(() => {
        axios
          .get(
            `http://${process.env.REACT_APP_BACKEND_URL}/weather-data?lat=${this.state.lat}&lon=${this.state.lon}`
          )
          .then((y) => {
            console.log(y.data);
            this.setState({
              weatherData: y.data,
            });
          });
      });
  };
  render() {
    return (
      <div>
        <h1> City Explorer</h1>
        <br />
        <SearchForm
          handleLocation={this.handleLocation}
          handleSubmit={this.handleSubmit}
        />
        <br />
        {this.state.showData && (
          <Location
            display_name={this.state.display_name}
            lat={this.state.lat}
            lon={this.state.lon}
            map={this.state.map}
          />
        )}

        {this.state.weatherData.map((item) => {
          return (
            <div>

              <p>Date: {item.date} <br/>
              Description: {item.description} <br/></p>
              
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
