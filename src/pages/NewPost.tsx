import { Header } from "@/components/Header";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content });
    // TODO: Save post
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">New Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
              placeholder="Enter post title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Content
            </label>
            <RichTextEditor onChange={setContent} />
          </div>
          
          <div>
            <Button type="submit">Publish Post</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewPost;