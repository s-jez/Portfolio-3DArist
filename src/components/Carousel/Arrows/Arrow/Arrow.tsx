import { useEffect, useState } from "react";
import styles from "./Arrow.module.css";
import arrow from "assets/arrow.svg";

interface IArrow {
  direction?: string;
}

const Arrow = ({ direction = "down" }: IArrow) => {
  const [sectionIndex, setSectionIndex] = useState<number>(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Get all the sections on the page
    const sections = Array.from(document.querySelectorAll("section"));
    setSections(sections);
    // Check which section is currently in view
    const checkSectionInView = (): void => {
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        // Skip over header element
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentIndex = i;
          break;
        }
      }
      setSectionIndex(currentIndex);
    };

    window.addEventListener("scroll", checkSectionInView);
    checkSectionInView();
    return () => {
      window.removeEventListener("scroll", checkSectionInView);
    };
  }, []);

  const handleClick = (): void => {
    const nextIndex = sectionIndex + 1;
    if (nextIndex < sections.length) {
      // Navigate to the next section
      setSectionIndex(nextIndex);
      const nextSection = sections[nextIndex];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (nextIndex === sections.length) {
      // Navigate to the first section
      setSectionIndex(0);
      const firstSection = sections[0];
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div onClick={handleClick}>
      <img
        src={arrow}
        className={direction === "down" ? styles.arrow : styles.arrowUp}
        alt="arrow"
      />
    </div>
  );
};

export default Arrow;
