import { FC } from "react";
import styles from "./PortfolioCard.module.css";

interface IPortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const PortfolioCard: FC<IPortfolioCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className={styles["portfolio-card-container"]}>
      <img
        src={imageUrl}
        alt={title}
        className={styles["portfolio-card-image"]}
      />
      <div className={styles["portfolio-card-content"]}>
        <h2 className={styles["portfolio-card-title"]}>{title}</h2>
        <p className={styles["portfolio-card-description"]}>{description}</p>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["portfolio-card-link"]}
        >
          View Project
        </a>
      </div>
    </div>
  );
};
