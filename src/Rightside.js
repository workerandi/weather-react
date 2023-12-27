import React from "react";

export default function Rightside(props) {
  return (
    <div className="Rightside">
      <div className="mainTemp row">
        <div className="col-6">
          <h1 id="temperature">{Math.round(props.data.temperature)}</h1>
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
        {props.data.humidity} %
      </p>
      <p className="otherCurrentInfo" id="windSpeed">
        {Math.round(props.data.wind)} km/h
      </p>
    </div>
  );
}
