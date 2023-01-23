import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-title"]}>
          <span></span>
          <span className={styles["nav-title__artist"]}>
            <a href="/">Wiktoria Skórek</a>
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
      </ul>
    </div>
  );
};

export default Navbar;
