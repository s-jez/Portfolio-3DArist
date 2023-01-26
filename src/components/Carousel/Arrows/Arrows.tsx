import styles from "./Arrows.module.css";

interface IArrows {
  prevSlide: any;
  nextSlide: any;
}

const Arrows = ({ prevSlide, nextSlide }: IArrows) => {
  return (
    <div className={styles.arrows}>
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};
export default Arrows;
