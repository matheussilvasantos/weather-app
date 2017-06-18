import React, { Component } from "react";
import GetWeather from "./GetWeather";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Enter a City and State</h1>
        <GetWeather />
      </div>
    );
  }
}

export default Home;
