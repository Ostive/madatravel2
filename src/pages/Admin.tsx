import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Link to="/admin/new">
            <Button>New Post</Button>
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg divide-y">
          {SAMPLE_POSTS.map((post) => (
            <div key={post.id} className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-blog-muted">{post.date}</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const SAMPLE_POSTS = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    date: "March 15, 2024"
  },
  {
    id: "2",
    title: "The Power of Tailwind CSS",
    date: "March 14, 2024"
  }
];

export default Admin;