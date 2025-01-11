import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export const BlogPost = ({ id, title, excerpt, date }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <Link to={`/post/${id}`}>
        <h2 className="text-3xl font-bold mb-2 text-blue-900 hover:text-blue-700 transition-colors">
          {title}
        </h2>
      </Link>
      <div className="text-blog-muted mb-4">{date}</div>
      <p className="text-lg leading-relaxed text-gray-600">{excerpt}</p>
      <Link 
        to={`/post/${id}`} 
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
      >
        Lire la suite →
      </Link>
    </article>
  );
};