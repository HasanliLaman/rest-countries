import React, { useState } from "react";
import Curved from "../UI/Curved";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const [toggle, setToggle] = useState(false);

  const changeUrl = function (region) {
    props.setUrl(`https://restcountries.com/v3.1/region/${region}`);
  };

  return (
    <div className={styles.filterContainer}>
      <Curved onClick={() => setToggle(!toggle)} className={styles.filter}>
        Filter by region
        <svg
          width="10px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
        </svg>
      </Curved>
      {toggle && (
        <Curved className={styles.filterDropdown}>
          <span onClick={() => changeUrl("africa")}>Africa</span>
          <span onClick={() => changeUrl("america")}>America</span>
          <span onClick={() => changeUrl("asia")}>Asia</span>
          <span onClick={() => changeUrl("europe")}>Europe</span>
          <span onClick={() => changeUrl("oceania")}>Oceania</span>
        </Curved>
      )}
    </div>
  );
};

export default Filter;
