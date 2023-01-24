import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-title"]}>
          <span></span>
          <span className={styles["nav-title__artist"]}>
            <a href="#App">Wiktoria Skórek</a>
          </span>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/" className={styles["nav-link"]}>
            Portfolio
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/" className={styles["nav-link"]}>
            Blog
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/" className={styles["nav-link"]}>
            Contact
          </a>
        </li>
        <div className={styles["mobile-nav"]}>
          <div className={styles.logo}></div>
          <div className={styles["hamburger-menu"]}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
