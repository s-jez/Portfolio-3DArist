import { BlogPost } from "../../Container/Blog";
import BlogCard from "../BlogCard";

import styles from "./BlogCard.module.css";

interface IBlogCards {
  blogPosts: BlogPost[];
}

const renderBlogCards = (blogPosts: BlogPost[]) => {
  return blogPosts.map((post) => <BlogCard key={post.id} {...post} />);
};

const BlogCards = ({ blogPosts }: IBlogCards) => {
  return <div className={styles.blog}>{renderBlogCards(blogPosts)}</div>;
};

export default BlogCards;
