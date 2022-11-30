import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import { useParams } from "react-router-dom";

const DetailComponent = () => {
  const { name } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://restcountries.com/v2/name/${name}?fullText=true`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
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
  }, [name]);

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
              {/* <h2>{item.name}</h2> */}
              <DetailCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default DetailComponent;
