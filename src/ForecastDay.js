import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function dayTemperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}`;
  }
  function dayForecast() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <p>{dayForecast()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <p className="maxMinFont">{dayTemperature()}°C</p>{" "}
    </div>
  );
}
