import React from "react";
import "./Card.scss";

const Card = ({ item, theme }) => {
  return (
    <>
      <article className={`${theme}-card card`} key={item.numericCode}>
        <div className="card-image">
          <img src={item.flags.svg} alt={item.name} />
        </div>
        <div className="card-content">
          <h2 className={`${theme}-card-name`}>{item.name}</h2>
          <ol className={`card-list ${theme}-card-list`}>
            <li>
              population: <span>{item.population}</span>
            </li>
            <li>
              Region: <span>{item.region}</span>
            </li>
            <li>
              Capital: <span>{item.capital}</span>
            </li>
          </ol>
        </div>
      </article>
    </>
  );
};

export default Card;
