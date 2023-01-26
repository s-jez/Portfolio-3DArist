import styles from "./ArtSection.module.css";
import Arrows from "../../Carousel/Arrows/Arrows";
import { useState } from "react";

const ArtSection = () => {
  const [slideIndex, setSlideIndex] = useState("");
  const prevSlide = () => {
    setSlideIndex(slideIndex);
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };
  return (
    <section className={styles["section__art"]}>
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
      <div className={styles["gallery"]}>
        <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    </section>
  );
};

export default ArtSection;
