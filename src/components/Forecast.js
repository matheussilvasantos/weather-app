import React, { Component } from "react";

import Weathers from "./Weathers";
import Loading from "./Loading";

import api from "../utils/api";

import queryString from "query-string";

import PropTypes from "prop-types";

function RenderWeathers(props) {
  return(
    <div>
      <h1>{props.city.name}</h1>
      <Weathers weathers={props.weathers} />
    </div>
  )
}

RenderWeathers.propTypes = {
  city: PropTypes.object.isRequired,
  weathers: PropTypes.array.isRequired
}

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
    return (
      <div>
        {this.state.weathers
            ? <RenderWeathers city={this.state.city} weathers={this.state.weathers} />
            : <Loading />}
      </div>
    );
  }
}

export default Forecast;
