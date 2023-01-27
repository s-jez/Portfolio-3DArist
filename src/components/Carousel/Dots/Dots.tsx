import styles from "./Dots.module.css";

interface IDots {
  activeIndex: number;
}

const Dots = ({ activeIndex }: IDots) => {
  return (
    <div className={styles.dots}>
      <span className={styles.dot}></span>
    </div>
  );
};

export default Dots;
