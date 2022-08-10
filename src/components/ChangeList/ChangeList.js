import React from "react";
import styles from "./ChangeList.module.css";
import Filter from "./Filter";
import Search from "./Search";
import Container from "../UI/Container";

const ChangeList = (props) => {
  return (
    <Container className={styles.changeList}>
      <Search setUrl={props.setUrl} />
      <Filter setUrl={props.setUrl} />
    </Container>
  );
};

export default ChangeList;
