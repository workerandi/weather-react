import "./Weather.css";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="WeatherApp">
      <div className="container-fluid">
        <div className="row">
          <Leftside />
          <Rightside />
        </div>
        <div className="row">
          <Forecast />
        </div>
      </div>
      <br />
      <a href="https://github.com/workerandi/weather-react.git">
        Coded by: Erandi Ramirez Oviedo
      </a>
    </div>
  );
}
