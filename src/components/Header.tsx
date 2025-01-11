import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold">Blog</Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/admin" className="text-gray-600 hover:text-gray-900">Admin</Link>
        </nav>
      </div>
    </header>
  );
};