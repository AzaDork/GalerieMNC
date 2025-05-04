import React from 'react';
import Inté1 from '/GalerieMNC_inté1.jpeg';
import Inté2 from '/GalerieMNC_inté2.jpeg';
import Inté3 from '/GalerieMNC_inté3.jpeg';

const galleryImages = [
  {
    id: 1,
    src: Inté1,
    alt: "Vue de la galerie avec des estampes et une sculpture"
  },
  {
    id: 2,
    src: Inté2,
    alt: "Espace d'exposition avec des estampes et des supports"
  },
  {
    id: 3,
    src: Inté3,
    alt: "Vue intérieure de la galerie avec des œuvres encadrées"
  }
];

const Mosaic: React.FC = () => {
  return (
    <section className="py-8 pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-2">
          {/* Deux images moyennes */}
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-2 h-[300px] md:h-[600px]">
            {galleryImages.slice(1, 3).map((image) => (
              <div key={image.id} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Grande image */}
          <div className="col-span-12 md:col-span-8 h-[300px] md:h-[600px]">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
