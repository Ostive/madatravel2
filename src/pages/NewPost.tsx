import { Header } from "@/components/Header";
import { TiptapEditor } from "@/components/TiptapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content });
    toast({
      title: "Article enregistré",
      description: "Votre article a été enregistré avec succès.",
    });
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Nouvel Article</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Titre
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
              placeholder="Entrez le titre de l'article"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Contenu
            </label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
          
          <div>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Publier l'article
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewPost;