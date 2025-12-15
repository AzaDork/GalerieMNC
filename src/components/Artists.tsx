import React, { useMemo } from 'react';
import ArtistCard from './artists/ArtistCard';
import type { Artist } from '../pages/ArtistsPage';

interface ArtistsProps {
  artists: Artist[];
}

const Artists: React.FC<ArtistsProps> = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return (
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Nos artistes
          </h2>
          <p className="text-gray-600 mb-8">
            Chargement en cours.
          </p>
        </div>
      </div>
    );
  }

  // 🔤 Tri alphabétique A → Z par nom d’artiste
  const sortedArtists = useMemo(() => {
    return [...artists].sort((a, b) =>
      a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
    );
  }, [artists]);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Nos artistes
          </h2>
          <p className="text-gray-600">
            La Galerie MNC représente des artistes contemporains de talent,
            chacun portant un regard unique sur le monde.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {sortedArtists.map((artist) => (
            <ArtistCard
              key={artist._id}
              artist={artist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
