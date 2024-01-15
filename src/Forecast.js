import React from "react";
import axios from "axios";
export default function Forecast(props) {
  function handleForecastResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(forecastApiUrl).then(handleForecastResponse);

  return (
    <div className="forecast row">
      <div className="col-sm">
        <p>Day</p>
        <img
          className="forecastIcons"
          src={props.icon}
          alt={props.description}
        ></img>
        <p>10 °C</p>
      </div>
    </div>
  );
}
