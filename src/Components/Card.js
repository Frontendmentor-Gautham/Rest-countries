import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item, theme }) => {
  return (
    <>
      <article className={`${theme}-card card`} key={item.numericCode}>
        <div className="card-image">
          <img src={item.flags.svg} alt={item.name} />
        </div>
        <div className="card-content">
          <h2 className={`${theme}-card-name`}>{item.name}</h2>
          <Link to={{ pathname: `/name/${item.name}` }}></Link>
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

          <Link to={{ pathname: `/name/${item.name}` }}>
            <p className={`${theme}-read read-more`}>Read More...</p>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Card;
