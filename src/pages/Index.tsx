import { Header } from "@/components/Header";
import { BlogPost } from "@/components/BlogPost";

const SAMPLE_POSTS = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and start building type-safe applications.",
    date: "March 15, 2024"
  },
  {
    id: "2",
    title: "The Power of Tailwind CSS",
    excerpt: "Discover why Tailwind CSS has become one of the most popular utility-first CSS frameworks.",
    date: "March 14, 2024"
  }
];

const Index = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12">Latest Posts</h1>
        <div>
          {SAMPLE_POSTS.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;