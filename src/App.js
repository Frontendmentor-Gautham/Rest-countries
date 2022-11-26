import { useState, useEffect } from "react";
import "./App.css";
import moonDarkTheme from "./images/moon-dark-theme.svg";
import moonLightTheme from "./images/moon-light.svg";

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
    </>
  );
}

export default App;
