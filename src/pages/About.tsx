import { Header } from "@/components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8">About</h1>
        <div className="prose prose-lg">
          <p>
            Welcome to our blog! We share insights about technology, development, and design.
            Our goal is to help developers and designers create better digital experiences.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;