import React from "react";
import NavbarButton from "./NavbarButton";
import styles from "./Navbar.module.css";
import Container from "../UI/Container";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <p>Where in the world?</p>
        <NavbarButton isDark={props.isDark} setIsDark={props.setIsDark} />
      </Container>
    </nav>
  );
};

export default Navbar;
