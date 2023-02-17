import { useEffect, useRef, useState } from "react";
import styles from "./Dots.module.css";

interface IDots {
  images: Image[];
  slideIndex: number;
  onSlideIndexChange: (index: number) => void;
}

interface Image {
  src: string;
}

const Dots = ({ images, slideIndex, onSlideIndexChange }: IDots) => {
  const [currentSlideIndex, setSlideIndex] = useState(slideIndex);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleSlideIndexChange = (index: number) => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setSlideIndex(index);
    onSlideIndexChange(index);
  };

  useEffect(() => {
    setSlideIndex(slideIndex);
  }, [slideIndex]);

  return (
    <div>
      <div className={styles.dots}>
        {images.map((image, index) => (
          <span
            className={styles.dot}
            key={index}
            style={{
              backgroundColor: currentSlideIndex === index ? "black" : "white",
            }}
            onClick={() => handleSlideIndexChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dots;
