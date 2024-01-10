import React from "react";

export default function Forecast(props) {
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
