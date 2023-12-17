import ForecastedDay from "./ForecastedDay";

export default function Forecast() {
  return (
    <div className="forecast row">
      <div className="col-sm">
        <ForecastedDay />
      </div>
      <div className="col-sm">
        <ForecastedDay />
      </div>
      <div className="col-sm">
        <ForecastedDay />
      </div>
      <div className="col-sm">
        <ForecastedDay />
      </div>
      <div className="col-sm">
        <ForecastedDay />
      </div>
    </div>
  );
}
