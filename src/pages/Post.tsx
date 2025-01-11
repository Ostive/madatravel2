import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";

// This would typically come from an API or database
const SAMPLE_POST = {
  id: "1",
  title: "Les Merveilles de l'Avenue des Baobabs",
  content: `
    <h1>Les Merveilles de l'Avenue des Baobabs</h1>
    <p>Située à environ 45 minutes de Morondava, l'Avenue des Baobabs est l'un des sites les plus emblématiques de Madagascar. Ces arbres majestueux, certains âgés de plus de 800 ans, créent un paysage à couper le souffle, particulièrement spectaculaire au lever et au coucher du soleil.</p>
    <img src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151" alt="Avenue des Baobabs" class="w-full rounded-lg my-8" />
    <h2>Une Histoire Naturelle Unique</h2>
    <p>Les baobabs, surnommés "arbres bouteilles" en raison de leur capacité à stocker jusqu'à 120 000 litres d'eau dans leur tronc, sont une espèce endémique de Madagascar. Sur les huit espèces de baobabs existant dans le monde, six sont uniquement présentes sur l'île.</p>
    <blockquote>Le meilleur moment pour visiter l'Avenue des Baobabs est au coucher du soleil, lorsque la lumière dorée illumine les troncs massifs des arbres, créant une atmosphère magique.</blockquote>
    <h2>Conservation et Écotourisme</h2>
    <p>Aujourd'hui, l'Avenue des Baobabs est protégée et représente un exemple remarquable de la façon dont l'écotourisme peut contribuer à la préservation de l'environnement tout en soutenant les communautés locales.</p>
  `,
  date: "15 Mars 2024",
  image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
  author: "Marie Dupont",
  readTime: "5 min"
};

const Post = () => {
  const { id } = useParams();
  // In a real app, you would fetch the post data based on the ID
  const post = SAMPLE_POST;

  return (
    <div className="min-h-screen bg-[url('/madagascar-bg.jpg')] bg-fixed bg-cover">
      <div className="min-h-screen bg-emerald-50/95">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-emerald-600 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime} de lecture</span>
              </div>
              <div 
                className="prose prose-emerald prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Post;