import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-1xl text-gray-800 leading-relaxed italic">
            Située au cœur de Saint-Germain-des-Prés, la Galerie Martine Namy-Caulier s'attache tout particulièrement à la vente et l'édition d'estampes contemporaines, tout en étant ouverte à la peinture et la sculpture. Possédant également un atelier d'encadrement, vous pourrez y faire encadrer les oeuvres choisies à la Galerie ou bien des oeuvres externes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;