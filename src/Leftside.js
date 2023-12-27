import React from "react";
import FormattedDate from "./FormattedDate";

export default function Leftside(props) {
  return (
    <div className="Leftside">
      <h2 class="mt-4" id="cityDisplayed">
        <strong>{props.data.city}</strong>
      </h2>
      <h3 id="currentTime">
        {" "}
        <FormattedDate date={props.data.date} />
      </h3>
      <br />
      <p id="description">{props.data.description}</p>
      <img id="icon" src={props.data.icon} alt={props.data.description}></img>
      <form id="inputForm">
        <input type="text" placeholder="Change City:" id="searchBar" />
        <button type="submit" id="searchButton">
          Search
        </button>
      </form>
    </div>
  );
}
