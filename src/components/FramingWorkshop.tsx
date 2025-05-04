import React from 'react';
import Framing1 from '/GalerieMNC_Framing1.jpeg';
import Framing2 from '/GalerieMNC_Framing2.jpeg';
import Framing3 from '/GalerieMNC_Framing3.jpeg';
import Framing4 from '/GalerieMNC_Framing4.jpeg';

const FramingWorkshop: React.FC = () => {
  const images = [
    {
      src: Framing1,
      alt: "Artisan encadreur découpant avec précision"
    },
    {
      src: Framing2,
      alt: "Travail minutieux sur un cadre"
    },
    {
      src: Framing3,
      alt: "Détail du travail d'encadrement"
    },
    {
      src: Framing4,
      alt: "Finition d'un encadrement"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover hover:scale-105 rounded-lg shadow-lg transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FramingWorkshop;