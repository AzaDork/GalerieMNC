import React from 'react';
import { X } from 'lucide-react';
import { Artist } from '../../pages/ArtistsPage';

interface ArtistDetailProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onClose }) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col"
        onClick={handleContentClick}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-light">{artist.name}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="md:flex gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={artist.photo.asset.url}
                  alt={artist.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose max-w-none mb-8">
                <p>{artist.bio}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-6">Œuvres de l'artiste</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {artist.featuredWorks.map((work) => (
                <div key={work._id} className="space-y-3">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={work.image.asset.url}
                      alt={work.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-lg">{work.title}</h4>
                  <p className="text-sm text-gray-500">{work.year}</p>
                  <p className="text-sm text-gray-500">{work.medium}</p>
                  <p className="text-sm text-gray-500">{work.dimensions}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
