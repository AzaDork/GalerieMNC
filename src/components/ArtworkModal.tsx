import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../utils/sanity'; 

interface Artwork {
  title?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  image?: any; // Sanity image object (asset._ref, etc.)
}

interface ArtworkModalProps {
  artwork: Artwork | null;
  artistName: string;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, artistName, onClose }) => {
  if (!artwork) return null;

  const imageUrl = artwork.image
    ? urlFor(artwork.image).width(1600).auto('format').quality(80).url()
    : undefined;

  const subject = `${artistName} - ${artwork.title ?? 'Œuvre'}`;

  return (
    <div
      className="
        fixed inset-0
        bg-black/50 backdrop-blur-sm
        z-40
        flex justify-center
        pt-[120px] pb-10
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white rounded-xl shadow-xl
          max-w-5xl w-[90%]
          max-h-[calc(100vh-160px)]
          overflow-y-auto
          relative
          p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="pt-6 space-y-6">
          {artwork.title && (
            <h2 className="text-xl md:text-2xl font-semibold">{artwork.title}</h2>
          )}

          {imageUrl && (
            <div className="flex justify-center">
              <img
                src={imageUrl}
                alt={artwork.title || `Œuvre de ${artistName}`}
                className="object-contain max-h-[55vh]"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          <div className="text-gray-700 space-y-1 text-center text-sm">
            {artwork.year && (
              <p>
                <strong>Année :</strong> {artwork.year}
              </p>
            )}
            {artwork.medium && (
              <p>
                <strong>Médium :</strong> {artwork.medium}
              </p>
            )}
            {artwork.dimensions && (
              <p>
                <strong>Dimensions :</strong> {artwork.dimensions}
              </p>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <Link
              to={`/nous-contacter?subject=${encodeURIComponent(subject)}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100"
              onClick={onClose}
            >
              Nous contacter à propos de cette œuvre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
