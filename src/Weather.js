import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

//import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setweatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: "./sun-regular.svg",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 id="cityDisplayed">{weatherData.city}</h2>
              <h3 id="currentTime">
                {" "}
                <FormattedDate date={weatherData.date} />
              </h3>
              <br />
              <p id="description">{weatherData.description}</p>
              <img
                id="icon"
                src={weatherData.icon}
                alt={weatherData.description}
              ></img>

              <form id="inputForm">
                <input type="text" placeholder="Change City:" id="searchBar" />
                <button type="submit" id="searchButton">
                  Search
                </button>
              </form>
            </div>
            <div className="col">
              <div className="mainTemp row">
                <div className="col-6">
                  <h1 id="temperature">
                    {Math.round(weatherData.temperature)}
                  </h1>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
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
                {weatherData.humidity} %
              </p>
              <p className="otherCurrentInfo" id="windSpeed">
                {Math.round(weatherData.wind)} km/h
              </p>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <br />
        <a href="https://github.com/workerandi/weather-react.git">
          Coded by: Erandi Ramirez Oviedo
        </a>
      </div>
    );
  } else {
    const apiKey = "c98c59e454c889012a63b37f133be189";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `loading...${props.defaultCity}`;
  }
}
