import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import ArtSection from "components/Sections/Art/ArtSection";
import FormSection from "components/Sections/Form/FormSection";
import MainSection from "components/Sections/Main/MainSection";
import SkillsSection from "components/Sections/Skills/SkillsSection";
import "./Home.css";
import Arrow from "components/Carousel/Arrows/Arrow/Arrow";

const Home = () => {
  return (
    <div className="App" id="App">
      <Navbar />
      <header className="App-header">
        <MainSection />
      </header>
      <section className="App-container" role="main">
        <SkillsSection />
        <ArtSection />
        <FormSection />
        <Arrow />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
