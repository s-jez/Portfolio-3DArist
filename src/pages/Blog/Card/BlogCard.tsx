import { BlogPost } from "../Container/Blog";
import styles from "./BlogCard.module.css";

const BlogCard = ({ id, image, title, date, description }: BlogPost) => {
  return (
    <div className={styles["card"]} key={id}>
      <img src={image} className={styles["card__img"]} alt={title} />
      <h3 className={styles["card__title"]}>{title}</h3>
      <div className={styles["card__article"]}>
        <span className={styles["card__date"]}>{date}</span>
        <p className={styles["card__description"]}>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
