import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanityClient } from '../utils/sanity';

interface Artwork {
  _id: string;
  title?: string;
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

  useEffect(() => {
    if (!slug) return;

    // On récupère l'artiste + ses oeuvres liées
    const query = `*[_type == "artist" && slug.current == $slug][0]{
      name,
      bio,
      exhibitions,
      photo { asset->{url} },
      "artworks": *[_type == "artwork" && references(^._id)]{
        _id,
        title,
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
  const exhibitionLines = artist.exhibitions
    ? artist.exhibitions
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0)
    : [];

  // On coupe la liste en 2 colonnes à peu près égales
  const middle = Math.ceil(exhibitionLines.length / 2);
  const leftExpos = exhibitionLines.slice(0, middle);
  const rightExpos = exhibitionLines.slice(middle);

  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 pb-16 space-y-16">
      {/* Titre */}
      <h1 className="text-3xl md:text-4xl font-light text-center mb-8">
        {artist.name}
      </h1>

      {/* Photo + Biographie en 2 colonnes */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {imageUrl && (
          <div className="w-full max-h-[380px] overflow-hidden rounded-lg bg-gray-100">
            <img
              src={imageUrl}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {artist.bio && (
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">
            {artist.bio}
          </div>
        )}
      </section>

      {/* Expositions */}
      {exhibitionLines.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Expositions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
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

      {/* Ses oeuvres */}
      {artist.artworks && artist.artworks.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Ses œuvres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {artist.artworks.map((art) => {
              const url = art.image?.asset?.url;
              if (!url) return null;
              return (
                <div key={art._id} className="overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={url}
                    alt={art.title || ''}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArtistDetailPage;
