import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import styles from "./Navbar.module.css";

import { linkedin, artstation, instagram } from "assets/socials";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "components/SwitchLanguage/Switch";

interface INavbar {
  isSubPage: boolean;
}

const Navbar = ({ isSubPage }: INavbar) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setIsOpen(false));

  const handleWindowResize = () => {
    window.innerWidth <= 968 ? setIsMobile(true) : setIsMobile(false);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
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
            <Link to="/">
              <div>Wiktoria Skórek</div>
            </Link>
          </span>
        </li>
        <li className={styles["nav-items"]}>
          {isSubPage && (
            <div className={styles["nav-item"]}>
              <Link to="/" className={styles["nav-link"]}>
                {t("navbar.home")}
              </Link>
            </div>
          )}
          <div className={styles["nav-item"]}>
            <Link to="/portfolio" className={styles["nav-link"]}>
              {t("navbar.portfolio")}
            </Link>
          </div>
          <div className={styles["nav-item"]}>
            <Link to="/blog" className={styles["nav-link"]}>
              {t("navbar.blog")}
            </Link>
          </div>
          {!isSubPage && (
            <div className={styles["nav-item"]}>
              <a href="#contact" className={styles["nav-link"]}>
                {t("navbar.contact")}
              </a>
            </div>
          )}
          <div className={styles["nav-item"]}>
            <LanguageSwitch />
          </div>
        </li>
        <li className={!isOpen ? styles["mobile-nav"] : styles["menu-active"]}>
          {!isOpen && (
            <div className={styles["nav-mobile"]}>
              <div className={styles["nav-logo"]}>
                <Link to="/">&#x200b;</Link>
              </div>
              <div className={styles.hamburger}>
                <Hamburger
                  rounded
                  onToggle={openMenu}
                  toggled={isOpen}
                  size={32}
                  color="white"
                />
              </div>
            </div>
          )}
          {isOpen && isMobile && (
            <div className={isOpen ? styles["menu-active"] : styles["menu"]}>
              <div className={styles["hamburger-container"]}>
                <div>
                  <Hamburger
                    rounded
                    onToggle={openMenu}
                    toggled={isOpen}
                    size={32}
                    color="white"
                  />
                </div>
              </div>
              <Link to="/portfolio" onClick={openMenu} className={styles.link}>
                {t("navbar.portfolio")}
              </Link>
              <Link to="/blog" onClick={openMenu} className={styles.link}>
                {t("navbar.blog")}
              </Link>
              <a href="#contact" onClick={openMenu} className={styles.link}>
                {t("navbar.contact")}
              </a>
              <LanguageSwitch />
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
