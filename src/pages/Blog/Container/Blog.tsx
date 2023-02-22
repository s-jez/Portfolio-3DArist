import { Container } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BlogCards from "../Card/Container/BlogCards";

import image from "../../../assets/shiba.jpeg";

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Title Example",
    image: image,
    date: "February 22, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Siema!",
    image: image,
    date: "January 1, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Witaj!",
    image: image,
    date: "March 1, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Blog = () => {
  return (
    <div id="#App">
      <Navbar />
      <Container style={{ paddingTop: "5rem" }}>
        <BlogCards blogPosts={blogPosts} />
      </Container>
    </div>
  );
};

export default Blog;
