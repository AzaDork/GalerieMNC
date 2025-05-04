import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Nouveaute from '../components/Nouveaute';
import Gallery from '../components/Gallery';
import { setupAnimations } from '../utils/animations';

const HomePage: React.FC = () => {
  useEffect(() => {
    setupAnimations();
    document.title = 'Galerie MNC | Art Contemporain & Encadrement';
  }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <Nouveaute />
      <Gallery />
    </>
  );
};

export default HomePage;
