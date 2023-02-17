/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./ArtSection.module.css";
import Arrows from "components/Carousel/Arrows/Arrows";
import { useEffect, useState, useRef } from "react";

interface Image {
  src: string;
}

const ArtSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const intervalId = useRef<null | NodeJS.Timeout>(null);

  const images: Image[] = [{ src: "#777" }, { src: "#222" }, { src: "#333" }];

  const prevSlide = () => {
    clearInterval(intervalId.current as NodeJS.Timeout);
    const shouldResetIndex = slideIndex === 0;
    const index = shouldResetIndex ? images.length - 1 : slideIndex - 1;
    setSlideIndex(index);
  };

  const nextSlide = () => {
    clearInterval(intervalId.current as NodeJS.Timeout);
    const shouldResetIndex = slideIndex === images.length - 1;
    const index = shouldResetIndex ? 0 : slideIndex + 1;
    setSlideIndex(index);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId.current as NodeJS.Timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

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
      <div
        className={styles["gallery"]}
        style={{
          backgroundColor: `${images[slideIndex].src}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
        <div className={styles["images"]}>
          {images.map((image, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                backgroundColor: slideIndex === index ? "black" : "white",
                borderRadius: "50%",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                clearInterval(intervalId.current as NodeJS.Timeout);
                setSlideIndex(index);
              }}
            />
          ))}
        </div>
      </div>
      <a
        className={styles["section__scroll"]}
        href="#contact"
        aria-label="scroll arrow"
      ></a>
    </section>
  );
};

export default ArtSection;
