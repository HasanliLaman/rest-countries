import React from "react";
import styles from "./CountryCard.module.css";
import Curved from "../UI/Curved";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const navigate = useNavigate();

  const countryClickHandler = function () {
    navigate(props.name.replace(/\s/g, ""));
  };

  return (
    <Curved onClick={countryClickHandler} className={styles.card}>
      <img src={props.flag} alt="flag" />
      <div className={styles.cardContent}>
        <h2>{props.name}</h2>
        <div>
          <span>Population:</span>
          <p>{props.population}</p>
        </div>
        <div>
          <span>Region:</span>
          <p>{props.region}</p>
        </div>
        <div>
          <span>Capital:</span>
          <p>{props.capital}</p>
        </div>
      </div>
    </Curved>
  );
};

export default CountryCard;
