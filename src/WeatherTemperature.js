import React from "react";

export default function MainTemperature(props) {
  return (
    <div className="mainTemp row">
      <div className="col-6 ">
        <h1 id="temperature">{Math.round(props.celsius)}</h1>
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
  );
}
