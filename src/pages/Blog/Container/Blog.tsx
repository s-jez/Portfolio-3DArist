import { Container } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BlogCards from "../Card/Container/BlogCards";
import SearchBar from "../Card/SearchBar/SearchBar";
import { blogPosts } from "../utils/blog";

const Blog = () => {
  return (
    <div id="#App">
      <Navbar isSubPage={true} />
      <Container style={{ paddingTop: "5rem" }}>
        <SearchBar />
        <BlogCards blogPosts={blogPosts} id="" />
      </Container>
    </div>
  );
};

export default Blog;
