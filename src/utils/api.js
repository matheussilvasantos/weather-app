var axios = require("axios");
var environment = require("./environment");

const APPID = environment["WEATHERID"];
const FORECASTAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + APPID;

function getForecast(location) {
  return axios.get(FORECASTAPI + "&q=" + location + "&type=accurate&cnt=5");
}

module.exports = {
  getForecast: getForecast
};
