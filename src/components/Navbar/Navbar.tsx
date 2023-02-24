import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import styles from "./Navbar.module.css";

import linkedin from "assets/linkedin.webp";
import instagram from "assets/instagram.webp";
import artstation from "assets/artstation.webp";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

interface INavbar {
  isSubPage: boolean;
}

const Navbar = ({ isSubPage }: INavbar) => {
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
          <Link to="/">
            <div className={styles["nav-logo"]}></div>
          </Link>
          <span className={styles["nav-title__artist"]}>
            <a href="#App">Wiktoria Skórek</a>
          </span>
        </li>
        <div className={styles["nav-items"]}>
          {isSubPage && (
            <li className={styles["nav-item"]}>
              <Link to="/" className={styles["nav-link"]}>
                Home
              </Link>
            </li>
          )}
          <li className={styles["nav-item"]}>
            <Link to="/portfolio" className={styles["nav-link"]}>
              Portfolio
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link to="/blog" className={styles["nav-link"]}>
              Blog
            </Link>
          </li>
          {!isSubPage && (
            <li className={styles["nav-item"]}>
              <a href="#contact" className={styles["nav-link"]}>
                Contact
              </a>
            </li>
          )}
          <li className={styles["nav-item"]}>
            <div className={styles["nav-language"]}></div>
          </li>
        </div>
        <li className={styles["mobile-nav"]}>
          <Link to="/" className={styles["nav-logo"]}>
            &#x200b;
          </Link>
          <div className={styles.hamburger}>
            <Hamburger
              rounded
              onToggle={openMenu}
              toggled={isOpen}
              size={32}
              color="white"
            />
          </div>
        </li>
        {isMobile && isOpen && (
          <div className={styles.overlay} onClick={openMenu}>
            <li className={isOpen ? styles["menu-active"] : styles["menu"]}>
              <Link to="/portfolio" onClick={openMenu} className={styles.link}>
                Portfolio
              </Link>
              <Link to="/blog" onClick={openMenu} className={styles.link}>
                Blog
              </Link>
              <a href="#contact" onClick={openMenu} className={styles.link}>
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
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
