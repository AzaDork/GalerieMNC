import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Artist } from '../../pages/ArtistsPage';

interface ArtistDetailProps {
  artist: Artist & {
    featuredWorks?: Array<{
      _id: string;
      title?: string;
      year?: string;
      medium?: string;
      dimensions?: string;
      image?: { asset?: { url?: string } };
    }>;
  };
  onClose: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // ESC pour fermer + focus initial
  useEffect(() => {
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleOverlayClick = () => onClose();
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const artistImageUrl = artist.photo?.asset?.url;
  const works = artist.featuredWorks ?? [];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col"
        onClick={handleContentClick}
        role="dialog"
        aria-modal="true"
        aria-label={`Détails de ${artist.name}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-light">{artist.name}</h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            aria-label="Fermer"
            type="button"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="md:flex gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-md">
                {artistImageUrl ? (
                  <img
                    src={artistImageUrl}
                    alt={`Portrait de ${artist.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Photo à venir
                  </div>
                )}
              </div>
            </div>

            <div className="md:w-2/3">
              {artist.bio ? (
                <div className="prose max-w-none mb-8">
                  <p>{artist.bio}</p>
                </div>
              ) : (
                <p className="text-gray-500 mb-8">Biographie à venir.</p>
              )}
            </div>
          </div>

          {works.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-6">Œuvres de l’artiste</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {works.map((work) => {
                  const workUrl = work.image?.asset?.url;
                  return (
                    <div key={work._id} className="space-y-3">
                      <div className="aspect-square overflow-hidden bg-gray-100 rounded-md">
                        {workUrl ? (
                          <img
                            src={workUrl}
                            alt={
                              work.title
                                ? `Œuvre "${work.title}" – ${artist.name}`
                                : `Œuvre de ${artist.name}`
                            }
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            Image à venir
                          </div>
                        )}
                      </div>

                      {work.title ? (
                        <h4 className="font-medium text-lg">{work.title}</h4>
                      ) : null}

                      <div className="text-sm text-gray-500 space-y-1">
                        {work.year ? <p>{work.year}</p> : null}
                        {work.medium ? <p>{work.medium}</p> : null}
                        {work.dimensions ? <p>{work.dimensions}</p> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
