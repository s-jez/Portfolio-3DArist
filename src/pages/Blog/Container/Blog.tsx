import { Container } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Container style={{ paddingTop: "5rem" }}>
        <h1 style={{ color: "white" }}>Test</h1>
      </Container>
    </>
  );
};

export default Blog;
