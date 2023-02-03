import styles from "./ArtSection.module.css";
import Arrows from "../../Carousel/Arrows/Arrows";
import { useState, useEffect } from "react";
import frame_2 from "../../../assets/frame_2.png";
import Dots from "../../Carousel/Dots/Dots";

const ArtSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const prevSlide = () => {
    if (slideIndex < 0) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  const nextSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex - 1);
    }
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
      <div
        className={styles["gallery"]}
        style={
          slideIndex === 0
            ? {
                backgroundColor: "#333",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url(${frame_2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
        }
      >
        <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
        <Dots activeIndex={slideIndex} />
      </div>
    </section>
  );
};

export default ArtSection;
