import { Container } from "@mui/system";
import Navbar from "components/Navbar/Navbar";
import BlogCards from "pages/Blog/Card/Container/BlogCards";
import { blogPosts } from "pages/Blog/utils/blog";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams();

  return (
    <div id="App">
      <Navbar />
      <Container style={{ paddingTop: "5rem" }}>
        <BlogCards id={id?.toString()} blogPosts={blogPosts} />
      </Container>
    </div>
  );
};

export default BlogPostPage;
