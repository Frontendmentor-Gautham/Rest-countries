import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appTheme } from "../App";
import "./DetailCard.css";

const DetailCard = ({ item }) => {
  const AppTheme = useContext(appTheme);
  const languages = [];
  function languagesFunc(items) {
    items.map((ele) => {
      languages.push(" " + ele.name);
      return ele.name;
    });
  }

  return (
    <>
      <Link to="/">
        <button className={`${AppTheme.theme}-btn back-button`}>Back</button>
      </Link>

      <div className="flex">
        <div className="img-wrapper">
          <img
            className="country-image"
            src={item.flags.png}
            alt="country flag"
          />
        </div>

        <div className={`${AppTheme.theme}-info country-info`}>
          <h1>{item.name}</h1>
          <div className="info-list">
            <ul className="left-info">
              <li>
                <span>Native name:</span> {item.nativeName}
              </li>
              <li>
                <span>Population:</span> {item.population}
              </li>
              <li>
                <span>Region:</span> {item.region}
              </li>
              <li>
                <span>Sub Region:</span> {item.subregion}
              </li>
              <li>
                <span>Capital: </span> {item.capital}
              </li>
            </ul>
            <ul className="right-info">
              <li>
                <span>Top level Domain: </span> {item.topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span> {item.currencies[0].name}
              </li>
              <li>
                <span>Languages: </span>
                {languagesFunc(item.languages)}
                {languages}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
