/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./ArtSection.module.css";
import Slider from "components/Carousel/Slider/Slider";
import { Link } from "react-router-dom";

const ArtSection = () => {
  return (
    <section className={styles["section__art"]} id="art">
      <h3>Art</h3>
      <div className={styles["section__block"]}>
        <h4>Madre pytanie?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nemo quos molestiae harum iusto nobis reiciendis illo distinctio
          tempore sit, saepe, excepturi libero, numquam et aut temporibus
          aliquid consequuntur perspiciatis?
        </p>
        <div className={styles["section__more"]}>
          <span>Zobacz wiecej</span>
          <Link to="/blog">
            {" "}
            <button>Blog</button>
          </Link>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default ArtSection;
