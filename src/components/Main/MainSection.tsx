import styles from "./MainSection.module.css";

import iframe from "../../assets/frame.webp";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import artstation from "../../assets/arstation.png";

const MainSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles["main__info"]}>
        <div className={styles["main__header"]}>
          <div className={styles["main__hello"]}>
            <span>H</span>
            <span>I</span>
            <span>!</span>
          </div>
          <h1>I am Wiktoria</h1>
          <div className={styles["main__artist"]}>
            <span>3D </span>
            <span>ARTIST</span>
          </div>
        </div>
        <div className={styles["main__frame"]}>
          <img src={iframe} width={300} alt="gallery frame" />
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
    </main>
  );
};

export default MainSection;
