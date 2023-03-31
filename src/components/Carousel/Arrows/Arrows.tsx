import styles from "./Arrows.module.css";

interface IArrows {
  prevSlide: any;
  nextSlide: any;
}

const Arrows = ({ prevSlide, nextSlide }: IArrows) => {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrow} onClick={prevSlide}>
        <div>&#10094;</div>
      </div>
      <div className={styles.arrow} onClick={nextSlide}>
        <div>&#10095;</div>
      </div>
    </div>
  );
};
export default Arrows;
