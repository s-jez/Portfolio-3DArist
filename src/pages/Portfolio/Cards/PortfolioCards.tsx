import { FC } from "react";
import { PortfolioCard } from "../Card/PortfolioCard";
import styles from "./PortfolioCards.module.css";

interface IPortfolio {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

interface IPortfolioCardsProps {
  portfolioList: IPortfolio[];
}

export const PortfolioCards: FC<IPortfolioCardsProps> = ({ portfolioList }) => {
  return (
    <div className={styles["portfolio-container"]}>
      {portfolioList.map((portfolio: IPortfolio) => (
        <PortfolioCard
          key={portfolio.id}
          title={portfolio.title}
          description={portfolio.description}
          imageUrl={portfolio.imageUrl}
          linkUrl={portfolio.linkUrl}
        />
      ))}
    </div>
  );
};
