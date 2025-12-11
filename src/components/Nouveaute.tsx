import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sanityClient } from '../utils/sanity';
import { Link } from 'react-router-dom';

interface Artwork {
  id: string;
  title: string;
  artistName: string;
  artistSlug: string;
  imageUrl: string;
}

interface HomePageResult {
  highlightedArtworks?: {
    _id: string;
    title?: string;
    artist?: {
      name?: string;
      slug?: { current?: string };
    };
    image?: { asset?: { url?: string } };
  }[];
}

const Nouveaute: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔎 Fetch des œuvres mises en avant
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const query = `
          *[_type == "homePage"][0]{
            highlightedArtworks[]->{
              _id,
              title,
              artist->{
                name,
                slug
              },
              image{ asset->{ url } }
            }
          }
        `;

        const data = await sanityClient.fetch<HomePageResult>(query);

        const mapped: Artwork[] =
          data?.highlightedArtworks
            ?.map((art) => {
              const url = art.image?.asset?.url;
              const artistSlug = art.artist?.slug?.current;

              // On ignore les œuvres sans image ou sans slug d’artiste
              if (!url || !artistSlug) return null;

              return {
                id: art._id,
                title: art.title || 'Sans titre',
                artistName: art.artist?.name || '',
                artistSlug,
                imageUrl: url,
              };
            })
            .filter(Boolean) as Artwork[];

        setArtworks(mapped || []);
        setCurrentIndex(0);
      } catch (error) {
        console.error('Erreur lors du fetch Sanity pour Nouveautés :', error);
        setArtworks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  // ⏱️ Auto-slide
  useEffect(() => {
    if (artworks.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [artworks.length]);

  const nextSlide = () => {
    if (!artworks.length) return;
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    if (!artworks.length) return;
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  // 🌀 états de chargement / vide
  if (loading) {
    return (
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 pl-4">Nouveautés</h2>
          <p>Chargement des œuvres…</p>
        </div>
      </section>
    );
  }

  if (!artworks.length) {
    return (
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 pl-4">Nouveautés</h2>
          <p>Modification en cours. Ça revient vite!</p>
        </div>
      </section>
    );
  }

  // 🎨 Carrousel
  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-12 pl-4">Nouveautés</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            {/* Bouton gauche */}
            <button
              onClick={prevSlide}
              className="mr-4 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slide cliquable */}
            <div className="relative aspect-[3/2] flex-grow overflow-hidden bg-white rounded-lg shadow-lg">
              {artworks.map((artwork, index) => (
                <Link
                  key={artwork.id}
                  to={`/artistes/${artwork.artistSlug}`}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                  }`}
                >
                  <img
                    src={artwork.imageUrl}
                    alt={`${artwork.title} par ${artwork.artistName}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-serif mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">{artwork.artistName}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bouton droit */}
            <button
              onClick={nextSlide}
              className="ml-4 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black w-4' : 'bg-gray-300'
                }`}
                aria-label={`Aller à l’œuvre ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nouveaute;
