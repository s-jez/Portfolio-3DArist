import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
