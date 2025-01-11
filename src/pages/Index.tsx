import { Header } from "@/components/Header";
import { BlogPost } from "@/components/BlogPost";

const SAMPLE_POSTS = [
  {
    id: "1",
    title: "Les Merveilles de l'Avenue des Baobabs",
    excerpt: "Découvrez l'un des sites les plus emblématiques de Madagascar, où les majestueux baobabs créent un paysage à couper le souffle, particulièrement spectaculaire au coucher du soleil.",
    date: "15 Mars 2024"
  },
  {
    id: "2",
    title: "Explorer le Parc National d'Andasibe",
    excerpt: "Plongez dans la forêt tropicale d'Andasibe, habitat naturel des lémuriens Indri et d'une biodiversité exceptionnelle unique à Madagascar.",
    date: "14 Mars 2024"
  },
  {
    id: "3",
    title: "Les Plages Paradisiaques de Nosy Be",
    excerpt: "Découvrez les eaux cristallines et les plages de sable blanc de Nosy Be, le joyau de l'océan Indien, parfait pour la plongée et la détente.",
    date: "13 Mars 2024"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('/madagascar-bg.jpg')] bg-fixed bg-cover">
      <div className="min-h-screen bg-white/95">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-blue-900">Découvrez Madagascar</h1>
            <p className="text-xl text-gray-600 mb-12">
              Explorez la Grande Île avec nos guides experts et découvrez des paysages uniques, 
              une faune exceptionnelle et une culture fascinante.
            </p>
            <div className="space-y-12">
              {SAMPLE_POSTS.map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;