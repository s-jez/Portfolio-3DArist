import Navbar from "components/Navbar/Navbar";
import { PortfolioCards } from "../Cards/PortfolioCards";
import house1 from "assets/background.webp";
import house2 from "assets/bg_house.webp";
import house3 from "assets/bg.webp";
import styles from "./Portfolio.module.css";
import { Container } from "@mui/material";

const Portfolio = () => {
  const portfolioItem = [
    {
      id: 1,
      title: "Project 1",
      description: "This is my first project!",
      imageUrl: house1,
      linkUrl: "",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is my second project!",
      imageUrl: house2,
      linkUrl: "",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This my third project!",
      imageUrl: house3,
      linkUrl: "",
    },
  ];
  return (
    <div id="#App">
      <Navbar isSubPage={true} />
      <div className={styles.portfolio}>
        <Container>
          <h1>Portfolio</h1>
        </Container>
        <PortfolioCards portfolioList={portfolioItem} />
      </div>
    </div>
  );
};

export default Portfolio;
