/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./ArtSection.module.css";
import Slider from "components/Carousel/Slider/Slider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArtSection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles["section__art"]} id="art">
      <h3>{t("home.art.title")}</h3>
      <div className={styles["section__block"]}>
        <h4>{t("home.art.question")}</h4>
        <p>{t("home.art.text")}</p>
        <div className={styles["section__more"]}>
          <span>{t("home.art.more")}</span>
          <Link to="/blog" target="_blank">
            <button>{t("home.art.btn")}</button>
          </Link>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default ArtSection;
