import React from 'react';
import { Artist } from '../../pages/ArtistsPage';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="overflow-hidden mb-4 aspect-square bg-gray-100">
        <img
          src={artist.photo.asset.url}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-medium mb-1 transition-colors group-hover:text-gray-800">{artist.name}</h3>
    </div>
  );
};

export default ArtistCard;
