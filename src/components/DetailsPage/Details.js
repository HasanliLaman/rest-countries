import React from "react";
import Container from "../UI/Container";
import Curved from "../UI/Curved";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";

const Details = (props) => {
  let lang = [];
  let currency = [];
  let native = [];

  const borderCountries = props.border?.filter((el, i) => i < 3);

  for (const val of Object.values(props.language)) {
    lang.push(val);
  }

  for (const val of Object.values(props.currency)) {
    currency.push(val.name);
  }

  for (const val of Object.values(props.native)) {
    native.push(val.common);
    break;
  }

  return (
    <Container className={styles.country}>
      <img src={props.flag} alt="flag" />
      <div className={styles.countryInfo}>
        <h1>{props.name}</h1>
        <div>
          <div className={styles.infoBlock}>
            <div>
              <span>Native Name: </span>
              <p>{native.join(", ")}</p>
            </div>
            <div>
              <span>Population: </span>
              <p>{props.population}</p>
            </div>
            <div>
              <span>Region: </span>
              <p>{props.region}</p>
            </div>
            <div>
              <span>Sub Region: </span>
              <p>{props.subRegion}</p>
            </div>
            <div>
              <span>Capital: </span>
              <p>{props.capital}</p>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div>
              <span>Top Level Domain: </span>
              <p>{props.domain[0]}</p>
            </div>
            <div>
              <span>Currencies: </span>
              <p>{currency.join(", ")}</p>
            </div>
            <div>
              <span>Languages: </span>
              <p>{lang.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <h2>Border Countries:</h2>
          <div className={styles.borderCountries}>
            {borderCountries?.map((el) => (
              <Link to={`../${el.replace(/\s/g, "")}`} key={el}>
                <Curved>{el}</Curved>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
