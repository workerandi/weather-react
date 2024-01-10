import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
        <WeatherTemperature celsius={props.data.temperature} />
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
