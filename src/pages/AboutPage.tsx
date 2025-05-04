import React, { useEffect } from 'react';
import Mosaic from '../components/Mosaic';
import StoreInfo from '../components/StoreInfo';
import LocationSection from '../components/Location';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'À Propos | Galerie MNC';
  }, []);

  return (
    <div className="pt-40">
      <Mosaic />
      <StoreInfo />
      <LocationSection />
    </div>
  );
};

export default AboutPage;
