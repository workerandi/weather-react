import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-sm" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    const apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleForecastResponse);

    return null;
  }
}
