/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./MainSection.module.css";

import linkedin from "../../assets/linkedin.webp";
import instagram from "../../assets/instagram.webp";
import artstation from "../../assets/artstation.webp";

const MainSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles["main__info"]}>
        <a
          className={styles["main__scroll"]}
          aria-label="scroll arrow"
          href="#footer"
        ></a>
        <div className={styles["main__header"]}>
          <div className={styles["main__hello"]}>
            <span>H</span>
            <span>I</span>
            <span>!</span>
          </div>
          <div>
            <h1>I am Wiktoria</h1>
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
        <div className={styles["main__frame"]}>
          <button className="main__button">Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
