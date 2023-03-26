import styles from "./Arrows.module.css";

interface IArrows {
  prevSlide: any;
  nextSlide: any;
}

const Arrows = ({ prevSlide, nextSlide }: IArrows) => {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrow} onClick={prevSlide}>
        <span>&#10094;</span>
      </div>
      <div className={styles.arrow} onClick={nextSlide}>
        <span>&#10095;</span>
      </div>
    </div>
  );
};
export default Arrows;
