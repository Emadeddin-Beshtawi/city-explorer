import React, { Component } from "react";

///// We need to import Bootstrap ////////
import "bootstrap/dist/css/bootstrap.min.css";

///// We need to import axios ////////
import axios from "axios";

///// We need to import supported SearchForm Component ////////
import SearchForm from "./component/SearchForm";

///// We need to import supported Weather Component ////////
import Weather from "./component/Weather";

///// We need to import supported Movie Component ////////
import Movie from "./component/Movie";

///// We need to import supported Location Component ////////
import Location from "./component/Location";

///// We need to import supported ErrorAlert Component ////////
import ErrorAlert from "./component/ErrorAlert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      map: "",
      weatherData: [],
      movieInfo: [],
      showData: false,
      showError: false,
      movieRender: false,
      weatherRender: false,
    };
    console.log(this.state);
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
    z.preventDefault();
    if (this.state.display_name === "") {
      this.setState({
        showError: true,
      });
    } else {
      let config = {
        method: "GET",
        baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`,
      };

      /////The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call.//////

      ////Axios is a promise based HTTP client for the browser and Node.js.////

      axios(config)
        .then((y) => {
          let responseData = y.data[0];
          this.setState({
            display_name: responseData.display_place,
            lon: responseData.lon,
            lat: responseData.lat,
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=1-18`,

            showData: true,
          });
        })
        .then(() => {
          axios
            .get(
              `http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`
            )
            .then((y) => {
              console.log(y.data);
              this.setState({
                weatherData: y.data.foreCast,
                weatherRender: true,
              });
            });
          // console.log(this.state.weatherData);
        })

        .then(() => {
          axios
            .get(
              `http://${process.env.REACT_APP_BACKEND_URL}/movie?query=${this.state.display_name}`
            )
            .then((y) => {
              console.log(y.data);
              this.setState({
                movieInfo: y.data,
                movieRender: true,
              });
            });
        });
    }
  };

  render() {
    return (
      <div>
        <h1> City Explorer</h1>
        <br />
        {this.state.showError && <ErrorAlert />}

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
        <br />

        {this.state.weatherRender && (
          <Weather
            weatherData={this.state.weatherData}
            display_name={this.state.display_name}
          />
        )}

        <br />

        {this.state.movieRender && (
          <Movie movieInfo={this.state.movieInfo} />
        )}
      </div>
    );
  }
}

export default App;
