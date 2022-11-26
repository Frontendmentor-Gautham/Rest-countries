import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.scss";

const ListCountries = ({ theme }) => {
  // for Api call
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://restcountries.com/v2/all", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result);
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

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
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
