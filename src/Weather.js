import React, { useState } from "react";
import axios from "axios";
import Leftside from "./Leftside.js";
import Rightside from "./Rightside.js";
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
              <Leftside date={weatherData} />
            </div>
            <div className="col">
              <Rightside date={weatherData} />
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
