import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast row">
        <div className="col-sm">
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleForecastResponse);

    return null;
  }
}
