import BlogPostPage from "pages/BlogPost/Container/BlogPostPage";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Container/Blog";
import Home from "./pages/Home/Container/Home";
import Portfolio from "./pages/Portfolio/Container/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/post/:id" element={<BlogPostPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
