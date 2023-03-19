import { BlogPost } from "pages/Blog/utils/blog";
import BlogCard from "../BlogCard";

import styles from "./BlogCard.module.css";

interface IBlogCards {
  id: string | undefined;
  blogPosts: BlogPost[];
}

const renderBlogCards = (blogPosts: BlogPost[]) => {
  return blogPosts.map((post) => <BlogCard key={post.id} {...post} />);
};

const BlogCards = ({ blogPosts, id }: IBlogCards) => {
  const card = blogPosts.find(
    (post) => post.id === Number.parseInt(id as string)
  );
  if (!card) {
    return <div className={styles.blog}>{renderBlogCards(blogPosts)}</div>;
  } else {
    return (
      <div className={styles.blog}>
        {renderBlogCards([
          {
            id: card.id,
            title: card.title,
            image: card.image,
            date: card.date,
            description: card.description,
          },
        ])}
      </div>
    );
  }
};

export default BlogCards;
