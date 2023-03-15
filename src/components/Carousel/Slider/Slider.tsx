import { useEffect, useMemo, useRef, useState } from "react";
import Arrows from "components/Carousel/Arrows";
import Dots from "components/Carousel/Dots";
import styles from "./Slider.module.css";

import sliderImage1 from "assets/slider/wiktoria-skorek-damaged-castle.webp";
import sliderImage2 from "assets/slider/wiktoria-skorek-cow-s-skull-oil-painting.webp";
import sliderImage3 from "assets/slider/wiktoria-skorek-house.webp";
import sliderImage4 from "assets/slider/wiktoria-skorek-farm-house.webp";

interface Image {
  src: string;
}

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const intervalId = useRef<null | NodeJS.Timeout>(null);

  const images: Image[] = [
    { src: sliderImage1 },
    { src: sliderImage2 },
    { src: sliderImage3 },
    { src: sliderImage4 },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedImages = useMemo(() => images, []);

  const prevSlide = () => {
    clearInterval(intervalId.current as NodeJS.Timeout);
    const shouldResetIndex = slideIndex === 0;
    const index = shouldResetIndex ? memoizedImages.length - 1 : slideIndex - 1;
    setSlideIndex(index);
  };

  const nextSlide = () => {
    clearInterval(intervalId.current as NodeJS.Timeout);
    const shouldResetIndex = slideIndex === memoizedImages.length - 1;
    const index = shouldResetIndex ? 0 : slideIndex + 1;
    setSlideIndex(index);
  };

  useEffect(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setSlideIndex((currentIndex) =>
        currentIndex === memoizedImages.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [memoizedImages]);
  return (
    <div
      className={styles.slider}
      style={{
        backgroundImage: `url(${memoizedImages[slideIndex].src})`,
      }}
    >
      <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
      <Dots
        images={memoizedImages}
        slideIndex={slideIndex}
        onSlideIndexChange={setSlideIndex}
      />
    </div>
  );
};

export default Slider;
