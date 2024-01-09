import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Leftside(props) {
  return (
    <div className="WeatherInfo row">
      <div className="Leftside col">
        <h2 className="mt-4" id="cityDisplayed">
          <strong>{props.data.city}</strong>
        </h2>
        <h3 id="currentTime">
          {" "}
          <FormattedDate date={props.data.date} />
        </h3>
        <br />
        <p id="description">{props.data.description}</p>
        <img id="icon" src={props.data.icon} alt={props.data.description}></img>
      </div>
      <div className="Rightside col">
        <div className="mainTemp row">
          <div className="col-6 ">
            <h1 id="temperature">{Math.round(props.data.temperature)}</h1>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <h1 className="units" id="cButton">
                  °C
                </h1>
              </div>
              <div className="col-8">
                <h1 className="units" id="fButton">
                  |°F
                </h1>
              </div>
            </div>
          </div>
        </div>
        <br />
        <p className="otherCurrentInfo" id="humidity">
          {props.data.humidity} %
        </p>
        <p className="otherCurrentInfo" id="windSpeed">
          {Math.round(props.data.wind)} km/h
        </p>
      </div>
    </div>
  );
}
