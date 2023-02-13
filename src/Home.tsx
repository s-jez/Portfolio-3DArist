import React from "react";
import Footer from "./components/Footer/Footer";
import FormSection from "./components/Form/FormSection";
import MainSection from "./components/Main/MainSection";
import Navbar from "./components/Navbar/Navbar";
import ArtSection from "./components/Sections/Art/ArtSection";
import SkillsSection from "./components/Skills/SkillsSection";
import "./App.css";

const Home = () => {
  return (
    <div className="App" id="App">
      <Navbar />
      <header className="App-header">
        <MainSection />
      </header>
      <main className="App-container" role="main">
        <SkillsSection />
        <ArtSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
