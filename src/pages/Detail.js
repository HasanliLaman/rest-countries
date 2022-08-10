import React from "react";
import BackButton from "../components/DetailsPage/BackButton";
import Details from "../components/DetailsPage/Details";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const borders = props.el.borders?.map((el) => props.getBorders(el));

  return (
    <div className={styles.detail}>
      <BackButton />
      <Details
        name={props.el.name.common}
        native={props.el.name.nativeName}
        population={props.el.population}
        region={props.el.region}
        capital={props.el.capital}
        subRegion={props.el.subregion}
        flag={props.el.flags.png}
        domain={props.el.tld}
        currency={props.el.currencies}
        language={props.el.languages}
        border={borders}
      />
    </div>
  );
};

export default Detail;
