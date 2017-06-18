import React from "react";
import dateFormat from "dateformat";

function Weather(props) {
  return(
    <div>
      <img src={process.env.PUBLIC_URL + "/weather-icons/" + props.weather.icon + ".svg"} />
      <span>{dateFormat(props.now, "dddd, mmmm d")}</span>
    </div>
  )
}

function Weathers(props)  {
  let now = new Date();
  return (
    <div>
      <ul>
        {props.weathers.map(function(weather, index) {
          return (
            <li>
              <Weather weather={weather.weather[0]} now={now.setDate(now.getDate() + index)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Weathers;
