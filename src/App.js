import { useState, useEffect } from "react";
import "./App.css";
import moonDarkTheme from "./images/moon-dark-theme.svg";
import moonLightTheme from "./images/moon-light.svg";
// import searchLight from "./images/search-light.png";
// import searchDark from "./images/search-dark.png";

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.body.classList.add("dark");
        break;
      case "light":
        document.body.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <>
      {/* Header part */}
      <nav className={`${theme}-navbar navbar`}>
        <div>
          <h1 className={`${theme}-text`}>Where in the world?</h1>
        </div>

        <div className="theme-container">
          <img
            onClick={changeTheme}
            className={`${theme}-dark-image`}
            src={moonDarkTheme}
            alt="Dark theme moon"
          />
          <img
            onClick={changeTheme}
            className={`${theme}-light-image`}
            src={moonLightTheme}
            alt="Dark theme moon"
          />
          <h4 className={`${theme}-text`}>Dark Mode</h4>
        </div>
      </nav>

      {/* body part-search input and card componenet */}
      <div className="input-fields">
        <input
          className={`${theme}-input-text`}
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search for a country"
        />

        <select
          className={`${theme}-region-option`}
          name="region"
          id="region-search"
          placeholder="Filter by region"
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}

export default App;
