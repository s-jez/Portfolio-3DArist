import React, { useEffect, useRef, useState } from "react";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
import styles from "./Slider.module.css";

interface Image {
  src: string;
}

const Slider = () => {
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
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setSlideIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [images]);
  return (
    <div
      className={styles.slider}
      style={{
        backgroundColor: `${images[slideIndex].src}`,
      }}
    >
      <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
      <Dots
        images={images}
        slideIndex={slideIndex}
        onSlideIndexChange={setSlideIndex}
      />
    </div>
  );
};

export default Slider;
