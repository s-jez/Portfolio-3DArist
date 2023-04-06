import React from "react";
import Navbar from "components/Navbar/Navbar";
import BlogCards from "../Card/Container/BlogCards";
import { blogPosts } from "../utils/blog";
import styles from "./Blog.module.css";
import { Container } from "@mui/system";

const Blog = () => {
  return (
    <div id="#App">
      <Navbar isSubPage={true} />
      <div className={styles.blog}>
        <Container>
          <h1>Blog</h1>
        </Container>
        <BlogCards blogPosts={blogPosts} id="" />
      </div>
    </div>
  );
};

export default Blog;
