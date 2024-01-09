import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

import "./Weather.css";

//import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
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
  function handleSubmit(event) {
    event.preventDefault();
    //search 4 a city
  }
  function handleCityChange(event) {}
  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container-fluid">
          <form onSubmit={handleSubmit} id="inputForm">
            <div className="SearchEngine row">
              <div className="col-sm-6">
                <input
                  type="text"
                  placeholder="Change City:"
                  id="searchBar"
                  className=" my-3"
                  style={{ width: 320 + "px" }}
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-6">
                <button type="submit" className="my-3" id="searchButton">
                  Search
                </button>
              </div>
            </div>
          </form>

          <WeatherInfo data={weatherData} />
        </div>
        <br />
        <a href="https://github.com/workerandi/weather-react.git">
          Coded by: Erandi Ramirez Oviedo
        </a>
      </div>
    );
  } else {
    const apiKey = "c98c59e454c889012a63b37f133be189";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `loading...`;
  }
}
