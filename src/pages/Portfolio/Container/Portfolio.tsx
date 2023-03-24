import Navbar from "components/Navbar/Navbar";
import { PortfolioCards } from "../Cards/PortfolioCards";
import house1 from "assets/background.webp";
import house2 from "assets/bg_house.webp";
import house3 from "assets/bg.webp";

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
    <>
      <Navbar isSubPage={true} />
      <PortfolioCards portfolioList={portfolioItem} />
    </>
  );
};

export default Portfolio;
