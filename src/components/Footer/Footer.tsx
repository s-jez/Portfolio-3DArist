import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer">
      <span className={styles["footer__title"]}>
        Wiktoria Skórek - 3D Artist
      </span>
      <div className={styles["footer__social"]}>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/wiktoria-sk%C3%B3rek/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/kosiawr/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.artstation.com/wiktoria_skorek"
            rel="noreferrer"
            target="_blank"
          >
            Art Station
          </a>
        </div>
        <div className={styles.social2}>
          <a href="/">Portfolio</a>
          <a href="/">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
