import React from 'react';
import { Artist } from '../../pages/ArtistsPage';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  const imageUrl = artist.photo?.asset?.url;

  return (
    <button
      onClick={onClick}
      className="text-left group focus:outline-none"
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={artist.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            Photo à venir
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium mb-1">{artist.name}</h3>
      {artist.bio && (
        <p className="text-sm text-gray-600 line-clamp-3">
          {artist.bio}
        </p>
      )}
    </button>
  );
};

export default ArtistCard;
