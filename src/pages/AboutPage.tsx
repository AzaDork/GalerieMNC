import React from 'react';
import { Helmet } from 'react-helmet-async';
import Mosaic from '../components/Mosaic';
import StoreInfo from '../components/StoreInfo';
import LocationSection from '../components/Location';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-40">
      <Helmet>
        <title>À propos | Galerie MNC – Galerie d’art contemporain à Paris</title>
        <meta
          name="description"
          content="Découvrez la Galerie MNC, galerie d’art contemporain à Paris : notre approche, nos artistes et les informations pratiques pour nous rendre visite."
        />
        <link rel="canonical" href="https://galeriemnc.com/a-propos" />
      </Helmet>

      <Mosaic />
      <StoreInfo />
      <LocationSection />
    </div>
  );
};

export default AboutPage;
