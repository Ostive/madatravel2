import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export const BlogPost = ({ id, title, excerpt, date, image }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <Link to={`/post/${id}`}>
          <h2 className="text-3xl font-bold mb-2 text-emerald-900 hover:text-emerald-700 transition-colors">
            {title}
          </h2>
        </Link>
        <div className="text-emerald-600 mb-4">{date}</div>
        <p className="text-lg leading-relaxed text-gray-600">{excerpt}</p>
        <Link 
          to={`/post/${id}`} 
          className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium"
        >
          Lire la suite →
        </Link>
      </div>
    </article>
  );
};