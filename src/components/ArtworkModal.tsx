import React from 'react';
import { Link } from 'react-router-dom';

interface ArtworkModalProps {
  artwork: {
    title?: string;
    year?: string;
    medium?: string;
    dimensions?: string;
    image?: { asset?: { url?: string } };
  } | null;
  artistName: string;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  artistName,
  onClose,
}) => {
  if (!artwork) return null;

  const imageUrl = artwork.image?.asset?.url;
  const subject = `${artistName} - ${artwork.title ?? 'Œuvre'}`;

  return (
    // Overlay plein écran, SANS scroll
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
      {/* Fenêtre blanche : seule zone scrollable */}
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
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="pt-6 space-y-6">
          {/* Titre */}
          {artwork.title && (
            <h2 className="text-xl md:text-2xl font-semibold">
              {artwork.title}
            </h2>
          )}

          {/* Image */}
          {imageUrl && (
            <div className="flex justify-center">
              <img
                src={imageUrl}
                alt={artwork.title || ''}
                className="object-contain max-h-[55vh]"
              />
            </div>
          )}

          {/* Infos */}
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

          {/* Bouton contact */}
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
