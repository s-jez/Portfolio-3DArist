/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./SkillsSection.module.css";

import {
  imageBlender,
  imageMaya,
  imageZBrush,
  imageUnrealEngine,
  imageMarvelous,
  imageAdobeSubstance,
  imageAdobeDesigner,
  imageAdobePhotoshop,
  imageAdobeIlustrator,
  imageSketchup,
} from "assets/software";

import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles["section__skils"]} id="skills">
      <h2> {t("home.skills.title")}</h2>
      <div className={styles["section__grid"]}>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageAdobePhotoshop}
              alt="Adobe Photoshop"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Adobe Photoshop</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageAdobeIlustrator}
              alt="Adobe Illustrator"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Adobe Illustrator</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageBlender}
              alt="Blender"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Blender</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageMaya}
              alt="Maya"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Maya</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageMarvelous}
              alt="Marvelous Toolbag"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Marvelous Toolbag</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageAdobeDesigner}
              alt="Adobe Substance Designer"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>
            Substance 3D Designer
          </span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageAdobeSubstance}
              alt="Adobe Substance Pointer"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Substance 3D Painter</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageSketchup}
              alt="Sketchup"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Sketchup</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageUnrealEngine}
              alt="Unreal Engine"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>Unreal Engine</span>
        </div>
        <div className={styles["section__card"]}>
          <div className={styles["section__circle"]}>
            <img
              src={imageZBrush}
              alt="ZBrush"
              className={styles["section__img"]}
              width={64}
              height={64}
            />
          </div>
          <span className={styles["section__title"]}>ZBrush</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
