import React from 'react';
import { Link } from 'react-router-dom';
import type { Artist } from '../../pages/ArtistsPage';
import { urlFor } from '../../utils/sanity';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const slug = artist.slug?.current;
  if (!slug) return null;

  // Image optimisée (portrait 4/5)
  const imageUrl = artist.photo
    ? urlFor(artist.photo)
        .width(800)
        .height(1000)
        .fit('crop')
        .auto('format')
        .url()
    : undefined;

  return (
    <Link
      to={`/artistes/${slug}`}
      className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-lg block"
      aria-label={`Voir la page de ${artist.name}`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Portrait de ${artist.name} – Galerie MNC`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            Photo à venir
          </div>
        )}
      </div>

      <h3 className="text-lg font-medium">{artist.name}</h3>
    </Link>
  );
};

export default ArtistCard;
