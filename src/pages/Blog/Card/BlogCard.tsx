import { BlogPost } from "../Container/Blog";
import styles from "./BlogCard.module.css";

const BlogCard = ({ id, title, date, description }: BlogPost) => {
  return (
    <div className={styles["blog__card"]} key={id}>
      <h3>{title}</h3>
      <span>{date}</span>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
