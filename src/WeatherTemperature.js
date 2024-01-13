import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convert2Farenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convert2Celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="mainTemp row">
        <div className="col-sm-6 ">
          <h1 className="m-0">{Math.round(props.celsius)}</h1>
        </div>

        <div className="col-sm-6 ">
          <h1 className="units ps-5 pt-5m-0">
            <a href="/" onClick={convert2Farenheit}>
              °C
            </a>
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainTemp row">
        <div className="col-sm-6 ">
          <h1 className="m-0">{Math.round(farenheit())}</h1>
        </div>
        <div className="col-sm-6">
          <h1 className="units ps-5 pt-5 m-0">
            <a href="/" onClick={convert2Celsius}>
              °F
            </a>
          </h1>
        </div>
      </div>
    );
  }
}
