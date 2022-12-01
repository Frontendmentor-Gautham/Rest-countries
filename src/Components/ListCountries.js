import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.scss";

const ListCountries = ({ theme }) => {
  // for Api call
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);

  const [SearchVal, setSearchVal] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://restcountries.com/v2/all", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setSearchApiData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    return () => {
      abortController.abort();
    };
  }, []);

  const searchValue = (e) => {
    if (e.target.value == "") {
      setItems(searchApiData);
    } else {
      const filteredResult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItems(filteredResult);
    }
    setSearchVal(e.target.value);
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={SearchVal}
              onInput={(e) => searchValue(e)}
            />
          </label>
        </div>
        <ul className="card-grid">
          {items.map((item) => (
            <li>
              <Card item={item} theme={theme} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ListCountries;
