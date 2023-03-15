/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./MainSection.module.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { linkedin, instagram, artstation } from "assets/socials";

const MainSection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.main}>
      <div className={styles["main__info"]}>
        <div className={styles["main__header"]}>
          <div className={styles["main__hello"]}>
            <span>H</span>
            <span>i</span>
            <span>!</span>
          </div>
          <div>
            <h1> {t("home.header.title")}</h1>
          </div>
          <div className={styles["main__artist"]}>
            <span>3D </span>
            <span>ARTIST</span>
          </div>
          <div className={styles["main__socials"]}>
            <a
              href="https://www.linkedin.com/in/wiktoria-sk%C3%B3rek/"
              target="_blank"
              rel="noreferrer"
              className={styles["main__social"]}
            >
              <img src={linkedin} width={74} height={74} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/kosiawr/"
              rel="noreferrer"
              target="_blank"
              className={styles["main__social"]}
            >
              <img src={instagram} width={74} height={74} alt="instagram" />
            </a>
            <a
              href="https://www.artstation.com/wiktoria_skorek"
              rel="noreferrer"
              target="_blank"
              className={styles["main__social"]}
            >
              <img src={artstation} width={74} height={74} alt="artstation" />
            </a>
          </div>
        </div>
        <div className={styles["main__frame"]}>
          <Link to="/portfolio">
            <button className={styles["main__button"]}>Portfolio</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
