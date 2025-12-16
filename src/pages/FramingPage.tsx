import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Nouveaute from '../components/Nouveaute';
import Gallery from '../components/Gallery';
import { setupAnimations } from '../utils/animations';

const HomePage: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <>
      <Helmet>
          <title>Galerie MNC | Galerie d’art contemporain à Paris</title>
            <meta
                name="description"
                content="Galerie MNC est une galerie d’art contemporain à Paris proposant également un atelier d’encadrement sur mesure. Découvrez nos artistes, expositions et œuvres uniques."
            />
            <link rel="canonical" href="https://galeriemnc.com/" />
      </Helmet>

      <Hero />
      <Introduction />
      <Nouveaute />
      <Gallery />
    </>
  );
};

export default HomePage;
