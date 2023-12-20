import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";
//import Leftside from "./Leftside";
//import Rightside from "./Rightside";
//import Forecast from "./Forecast";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      temperature: response.data.main.temp,
      wind: response.data.main.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 id="cityDisplayed">"Morelia"</h2>
              <h2 id="currentTime">"adfa"</h2>
              <br />
              <p id="description">"asdfad"</p>
              <img id="icon" src="sun-regular.svg" alt="icon"></img>

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
                  <h1 id="temperature">{Math.round()}</h1>
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
                43 %
              </p>
              <p className="otherCurrentInfo" id="windSpeed">
                5 km/h
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
    let city = "london";
    const apiKey = "c98c59e454c889012a63b37f133be189";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
