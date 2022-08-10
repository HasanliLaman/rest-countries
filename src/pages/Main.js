import React, { useState } from "react";
import CountryContainer from "../components/Countries/CountryContainer";
import ChangeList from "../components/ChangeList/ChangeList";
import styles from "./Main.module.css";

const Main = () => {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

  return (
    <div className={styles.main}>
      <ChangeList setUrl={setUrl} />
      <CountryContainer url={url} />
    </div>
  );
};

export default Main;
