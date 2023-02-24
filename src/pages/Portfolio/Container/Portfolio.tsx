import { Container } from "@mui/system";
import Navbar from "components/Navbar/Navbar";
import { PortfolioCards } from "../Cards/PortfolioCards";
import image from "assets/shiba.jpeg";

const Portfolio = () => {
  const portfolioItem = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: image,
      linkUrl: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: image,
      linkUrl: "https://example.com/project1",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: image,
      linkUrl: "https://example.com/project1",
    },
  ];
  return (
    <>
      <Navbar isSubPage={true} />
      <Container>
        <PortfolioCards portfolioList={portfolioItem} />
      </Container>
    </>
  );
};

export default Portfolio;
