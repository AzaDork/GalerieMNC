import React, { useMemo } from 'react';
import ArtistCard from './artists/ArtistCard';
import type { Artist } from '../pages/ArtistsPage';

interface ArtistsProps {
  artists: Artist[];
}

const Artists: React.FC<ArtistsProps> = ({ artists }) => {
  // 🔤 Tri alphabétique
  const sortedArtists = useMemo(() => {
    return [...artists].sort((a, b) =>
      a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
    );
  }, [artists]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Message de chargement discret */}
        {artists.length === 0 && (
          <div className="text-center text-gray-500 mb-12">
            Chargement des artistes…
          </div>
        )}

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {sortedArtists.map((artist) => (
            <ArtistCard key={artist._id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
