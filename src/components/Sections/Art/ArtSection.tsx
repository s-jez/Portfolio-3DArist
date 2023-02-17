/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./ArtSection.module.css";
import Slider from "components/Carousel/Slider/Slider";

const ArtSection = () => {
  return (
    <section className={styles["section__art"]} id="art">
      <h3>Art</h3>
      <div className={styles["section__block"]}>
        <h4>Mądre pytanie?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nemo quos molestiae harum iusto nobis reiciendis illo distinctio
          tempore sit, saepe, excepturi libero, numquam et aut temporibus
          aliquid consequuntur perspiciatis?
        </p>
        <div className={styles["section__more"]}>
          <span>Zobacz więcej</span>
          <button>BLOG</button>
        </div>
      </div>
      <Slider />
      <a
        className={styles["section__scroll"]}
        href="#contact"
        aria-label="scroll arrow"
      ></a>
    </section>
  );
};

export default ArtSection;
