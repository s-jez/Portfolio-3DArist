import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setIsOpen(false));

  const handleWindowResize = () => {
    window.innerWidth < 1020 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className={styles.nav} ref={node}>
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
          <a href="#App" className={styles.logo}>
            logo
          </a>
          <div
            className={!isOpen ? styles["hamburger-menu"] : ""}
            onClick={openMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        {isMobile && (
          <div className={isOpen ? styles["menu-active"] : styles["menu"]}>
            <div className={styles["hamburger-menu"]} onClick={openMenu}>
              <div className={styles.line}></div>
            </div>
            <a href="/" onClick={openMenu}>
              PORTFOLIO
            </a>
            <a href="/" onClick={openMenu}>
              BLOG
            </a>
            <a href="/" onClick={openMenu}>
              CONTACT
            </a>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
