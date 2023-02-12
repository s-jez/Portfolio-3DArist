import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Navbar.module.css";

import linkedin from "../../assets/linkedin.webp";
import instagram from "../../assets/instagram.webp";
import artstation from "../../assets/artstation.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setIsOpen(false));

  const handleWindowResize = () => {
    window.innerWidth <= 968 ? setIsMobile(true) : setIsMobile(false);
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
    <nav className={styles.nav} ref={node}>
      <ul>
        <li className={styles["nav-title"]}>
          <div className={styles["nav-logo"]}></div>
          <span className={styles["nav-title__artist"]}>
            <a href="#App">Wiktoria Skórek</a>
          </span>
        </li>
        <div className={styles["nav-items"]}>
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
          <li className={styles["nav-item"]}>
            <div className={styles["nav-language"]}></div>
          </li>
        </div>
        <div className={styles["mobile-nav"]}>
          <a href="#App" className={styles["nav-logo"]}>
            &#x200b;
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
            <div className={styles["menu-burger"]} onClick={openMenu}>
              <div className={styles.line}></div>
            </div>
            <a href="/" onClick={openMenu}>
              Portfolio
            </a>
            <a href="/" onClick={openMenu}>
              Blog
            </a>
            <a href="/" onClick={openMenu}>
              Contact
            </a>
            <div className={styles["menu__icons"]}>
              <a
                href="https://www.linkedin.com/in/wiktoria-sk%C3%B3rek/"
                target="_blank"
                rel="noreferrer"
                className={styles["main__social"]}
              >
                <img src={linkedin} width={80} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/kosiawr/"
                rel="noreferrer"
                target="_blank"
                className={styles["main__social"]}
              >
                <img src={instagram} width={80} alt="instagram" />
              </a>
              <a
                href="https://www.artstation.com/wiktoria_skorek"
                rel="noreferrer"
                target="_blank"
                className={styles["main__social"]}
              >
                <img src={artstation} width={80} alt="artstation" />
              </a>
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
