import React, { Component } from "react";
import PropTypes from "prop-types";
import GetWeather from "./GetWeather";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2 className="header__subtitle">
          <Link to="/">{this.props.title}</Link>
        </h2>
        <GetWeather classes="header__get_weather" />
      </div>
    ); 
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
