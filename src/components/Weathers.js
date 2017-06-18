import React from "react";
import dateFormat from "dateformat";
import PropTypes from "prop-types";

function Weather(props) {
  let icon = process.env.PUBLIC_URL + "/weather-icons/" + props.weather.icon + ".svg";
  return(
    <div>
      <img src={icon} alt={props.weather.main} />
      <span>{dateFormat(props.now, "dddd, mmmm d")}</span>
    </div>
  )
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  now: PropTypes.number.isRequired
}

function Weathers(props) {
  let now = new Date();
  return (
    <div>
      <ul>
        {props.weathers.map(function(weather, index) {
          return (
            <li key={index}>
              <Weather weather={weather.weather[0]} now={now.setDate(now.getDate() + index)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Weathers.propTypes = {
  weathers: PropTypes.array.isRequired
}

export default Weathers;
