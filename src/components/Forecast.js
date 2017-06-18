import React, { Component } from "react";
import Weathers from "./Weathers";
import api from "../utils/api";
import queryString from "query-string";

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathers: null
    };
  }
  componentDidMount() {
    let location = queryString.parse(this.props.location.search);
    api.getForecast(location.location)
      .then(function(response) {
        this.setState(function() {
          return {
            city: response.data.city,
            weathers: response.data.list
          }
        });
      }.bind(this));
  }
  render() {
    var location = queryString.parse(this.props.location.search);
    return (
      <div>
        {this.state.weathers &&
          <div>
            <h1>{this.state.city.name}</h1>
            <Weathers weathers={this.state.weathers} />
          </div>}
      </div>
    );
  }
}

export default Forecast;
