import React from "react";
import styles from "./Curved.module.css";

const Curved = (props) => {
  return (
    <div
      className={styles.curved + " " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Curved;
