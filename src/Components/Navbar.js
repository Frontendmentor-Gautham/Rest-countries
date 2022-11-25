import React, { useState, useEffect } from "react";
import "./Navbar.css";
import moonLight from "../images/moon-light.svg";
import moonDark from "../images/moon-dark.svg";

const Navbar = () => {
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
        document.body.classList.add("light");
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
      <nav className="navbar">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div className="theme-container">
          <img className="theme-image" src={moonDark} alt="Dark theme moon" />
          <h4>Dark mode</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
