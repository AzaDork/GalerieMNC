import React from 'react';
import vitrineDessin from '/GalerieMNC_vitrineDessin.jpg'

const StoreInfo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src={vitrineDessin}
            alt="Illustration de la façade de la Galerie Martine Namy-Caulier"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            La Galerie Martine Namy-Caulier a ouvert ses portes en 1985. Située au cœur de Saint-Germain-des-Prés, la galerie s'attache tout particulièrement à la vente et l'édition d'estampes contemporaines, tout en étant ouverte à la peinture et la sculpture. Elle présente depuis de nombreuses années les œuvres de B. Munch, Louttre. B, Le Balp, Goujaud, Allirand, Bozon, Tobé, Monadé, Muckensturm, Ximena, Seyedin, Segui, Ishii, Dio Viana, Vielle...
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Doublée d'un Atelier d'Encadrement, la Galerie propose une gamme très complète d'encadrements tant pour les œuvres choisies à la Galerie qu'amenées de l'extérieure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;