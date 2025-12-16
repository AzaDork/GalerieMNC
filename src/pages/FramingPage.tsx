import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AtelierEncadrement from '../components/AtelierEncadrement';
import VideoSection from '../components/VideoSection';
import FramingWorkshop from '../components/FramingWorkshop';
import FraimingDescritpion from '../components/FraimingDescription';

const FramingPage: React.FC = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="pt-40">
      <Helmet>
        <title>Atelier d’encadrement sur mesure à Paris | Galerie MNC</title>
        <meta
          name="description"
          content="Atelier d’encadrement sur mesure à Paris : conseils, choix de cadres et finitions. Découvrez l’atelier de la Galerie MNC et contactez-nous pour un encadrement adapté à vos œuvres."
        />
        <link rel="canonical" href="https://galeriemnc.com/encadrement" />
      </Helmet>

      <AtelierEncadrement />
      <FraimingDescritpion />
      <VideoSection />
      <FramingWorkshop />
    </div>
  );
};

export default FramingPage;
