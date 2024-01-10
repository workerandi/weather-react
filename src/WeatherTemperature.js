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
        <div className="col-6 ">
          <h1 id="temperature">{Math.round(props.celsius)}</h1>
        </div>
        <div className="col-6">
          <div className="row">
            <h1 className="units">
              {" "}
              °C |
              <a href="/" onClick={convert2Farenheit}>
                °F
              </a>
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainTemp row">
        <div className="col-6 ">
          <h1 id="temperature">{Math.round(farenheit())}</h1>
        </div>
        <div className="col-6">
          <div className="row">
            <h1 className="units">
              {" "}
              <a href="/" onClick={convert2Celsius}>
                °C
              </a>{" "}
              |°F
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
