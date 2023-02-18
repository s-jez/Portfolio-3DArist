import { useEffect, useState } from "react";
import styles from "./Arrow.module.css";

const Arrow = () => {
  const [sectionIndex, setSectionIndex] = useState<number>(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Get all the sections on the page
    const sections = document.querySelectorAll("section");
    setSections(Array.from(sections));
    // Check which section is currently in view
    const checkSectionInView = (): void => {
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
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
    const nextIndex = (sectionIndex + 1) % sections.length;
    setSectionIndex(nextIndex);
    const nextSection = sections[nextIndex];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <div className={styles.arrow} onClick={handleClick}></div>;
};

export default Arrow;
