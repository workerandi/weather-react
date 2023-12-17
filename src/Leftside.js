export default function Leftside() {
  return (
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
  );
}
