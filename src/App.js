import React, { useState, useEffect } from "react";
import "./App.css";
import ListCountries from "./Components/ListCountries";
import moonDarkTheme from "./images/moon-dark-theme.svg";
import moonLightTheme from "./images/moon-light.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailComponent from "./Components/DetailComponent";
// import searchLight from "./images/search-light.png";
// import searchDark from "./images/search-dark.png";

export const appTheme = React.createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const themeProvider = {
    theme,
  };

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
      <Router>
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

        <Switch>
          <Route exact path="/">
            <ListCountries theme={theme} />
          </Route>

          <appTheme.Provider value={themeProvider}>
            <Route path="/name/:name" component={DetailComponent}></Route>
          </appTheme.Provider>

          {/* <appTheme.Provider value={themeProvider} /> */}
          <Route> This is 404 page</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
