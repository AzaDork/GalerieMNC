import React from 'react';
import Atelier from '/GalerieMNC_Atelier.jpeg';

const Mosaic: React.FC = () => {
  return (
    <section className="pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="w-full h-[300px] md:h-[600px]">
          <img
            src={Atelier}
            alt="Vue de l'atelier d'encadrement"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Mosaic;