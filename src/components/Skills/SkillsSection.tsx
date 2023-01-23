import React from "react";
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  return (
    <section className={styles["section__skils"]}>
      <h3>Skills</h3>
      <div className={styles["section__grid"]}>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Blender</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Maya</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>ZBrush</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Unreal Engine</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Marvelous Toolbag</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>
            Adobe Substance Pointer
          </span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>
            Adobe Substance Designer
          </span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Adobe Photoshop</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Adobe Illustrator</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}></div>
          <span className={styles["section__title"]}>Sketchup</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
