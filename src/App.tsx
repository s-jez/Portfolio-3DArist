import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ArtSection from "./components/Sections/Art/ArtSection";
import MainSection from "./components/Main/MainSection";
import FormSection from "./components/Form/FormSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <header className="App-header">
        <MainSection />
      </header>
      <main className="App-container">
        <SkillsSection />
        <ArtSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
