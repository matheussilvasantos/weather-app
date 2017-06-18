import React, { Component } from "react";
import PropTypes from "prop-types";
import GetWeather from "./GetWeather";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h2><Link to="/">{this.props.title}</Link></h2>
        <GetWeather />
      </div>
    ); 
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
