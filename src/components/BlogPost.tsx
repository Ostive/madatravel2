import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export const BlogPost = ({ id, title, excerpt, date }: BlogPostProps) => {
  return (
    <article className="mb-12">
      <Link to={`/post/${id}`}>
        <h2 className="text-3xl font-bold mb-2 hover:text-blog-accent transition-colors">{title}</h2>
      </Link>
      <div className="text-blog-muted mb-4">{date}</div>
      <p className="text-lg leading-relaxed">{excerpt}</p>
      <Link to={`/post/${id}`} className="inline-block mt-4 text-blog-accent hover:text-blog-accent-hover">
        Read more →
      </Link>
    </article>
  );
};