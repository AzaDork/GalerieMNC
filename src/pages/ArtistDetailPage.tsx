import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanityClient } from '../utils/sanity';
import ArtworkModal from '../components/ArtworkModal';

interface Artwork {
  _id: string;
  title?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  image?: { asset?: { url?: string } };
}

interface ArtistDetail {
  name: string;
  bio?: string;
  exhibitions?: string;
  photo?: { asset?: { url?: string } };
  artworks?: Artwork[];
}

const ArtistDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [artist, setArtist] = useState<ArtistDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAllExposMobile, setShowAllExposMobile] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // 🚀 Empêche de scroller quand la modale est ouverte
  useEffect(() => {
    if (selectedArtwork) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = previous || 'auto';
      };
    }
  }, [selectedArtwork]);

  // 🔎 Récupération Sanity
  useEffect(() => {
    if (!slug) return;

    const query = `*[_type == "artist" && slug.current == $slug][0]{
      name,
      bio,
      exhibitions,
      photo { asset->{url} },
      "artworks": *[_type == "artwork" && references(^._id)]{
        _id,
        title,
        year,
        medium,
        dimensions,
        image { asset->{url} }
      }
    }`;

    sanityClient
      .fetch<ArtistDetail>(query, { slug })
      .then((data) => {
        setArtist(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur Sanity (artist detail):', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-40 max-w-4xl mx-auto px-4">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="pt-40 max-w-4xl mx-auto px-4">
        <p>Artiste introuvable.</p>
      </div>
    );
  }

  const imageUrl = artist.photo?.asset?.url;

  // ⚙️ Split des expositions
  const exhibitionLines = artist.exhibitions
    ? artist.exhibitions
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0)
    : [];

  const hasMoreExpos = exhibitionLines.length > 10;

  const mobileExpos =
    showAllExposMobile || !hasMoreExpos
      ? exhibitionLines
      : exhibitionLines.slice(0, 10);

  const middle = Math.ceil(exhibitionLines.length / 2);
  const leftExpos = exhibitionLines.slice(0, middle);
  const rightExpos = exhibitionLines.slice(middle);

  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 pb-16 space-y-16">
      <h1 className="text-3xl md:text-4xl font-light text-center mb-8">
        {artist.name}
      </h1>

      {/* --- BIO + PHOTO --- */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {imageUrl && (
          <div className="w-full rounded-lg bg-gray-100 flex justify-center">
            <img
              src={imageUrl}
              alt={artist.name}
              className="w-full max-w-[420px] h-auto object-contain"
            />
          </div>
        )}

        {artist.bio && (
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">
            {artist.bio}
          </div>
        )}
      </section>

      {/* --- EXPOSITIONS --- */}
      {exhibitionLines.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Expositions</h2>

          {/* Mobile */}
          <div className="md:hidden space-y-3 text-sm">
            <ul className="space-y-1 italic">
              {mobileExpos.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            {hasMoreExpos && (
              <button
                type="button"
                onClick={() => setShowAllExposMobile((prev) => !prev)}
                className="mt-2 text-xs font-medium underline underline-offset-4"
              >
                {showAllExposMobile
                  ? 'Réduire la liste'
                  : 'Afficher toutes les expositions'}
              </button>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <ul className="space-y-1 italic">
              {leftExpos.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            <ul className="space-y-1 italic">
              {rightExpos.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* --- ŒUVRES --- */}
      {artist.artworks && artist.artworks.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Ses œuvres</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artist.artworks.map((art) => {
              const url = art.image?.asset?.url;
              if (!url) return null;

              return (
                <button
                  key={art._id}
                  type="button"
                  onClick={() => setSelectedArtwork(art)}
                  className="overflow-hidden rounded-md bg-gray-100 aspect-square group"
                >
                  <img
                    src={url}
                    alt={art.title || ''}
                    className="w-full h-full object-cover duration-300 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </section>
      )}

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          artistName={artist.name}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
};

export default ArtistDetailPage;
