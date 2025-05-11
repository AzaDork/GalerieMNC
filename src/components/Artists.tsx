import React, { useState } from 'react';
import ArtistCard from './artists/ArtistCard';
import ArtistDetail from './artists/ArtistDetail';
import { Artist } from '../pages/ArtistsPage';

interface ArtistsProps {
  artists: Artist[];
}

const Artists: React.FC<ArtistsProps> = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedArtist(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light tracking-tight mb-4">Nos artistes</h2>
          <p className="text-gray-600">
            La Galerie MNC représente des artistes contemporains de talent, chacun portant un regard unique sur le monde.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artists.map((artist) => (
            <ArtistCard
              key={artist._id}
              artist={artist}
              onClick={() => handleArtistClick(artist)}
            />
          ))}
        </div>
      </div>

      {selectedArtist && (
        <ArtistDetail artist={selectedArtist} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Artists;
