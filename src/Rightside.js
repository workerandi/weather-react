export default function Rightside() {
  return (
    <div className="col">
      <div className="mainTemp row">
        <div className="col-6">
          <h1 id="temperature">47</h1>
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
  );
}
