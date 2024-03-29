import styles from "./BlogCard.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../utils/blog";

const BlogCard = ({ id, image, title, date, description }: BlogPost) => {
  const [, setIsNavigating] = useState(false);

  const navigate = useNavigate();
  const handleClick = (id: number) => {
    setIsNavigating(true);
    navigate(`/blog/post/${id}`);
  };
  return (
    <div className={styles["card"]} key={id} onClick={() => handleClick(id)}>
      <img src={image} className={styles["card__img"]} alt={title} />
      <div>
        <h3 className={styles["card__title"]}>{title}</h3>
        <div className={styles["card__article"]}>
          <span className={styles["card__date"]}>{date}</span>
          <p className={styles["card__description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
