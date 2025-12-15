import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HeaderHome from './components/HeaderHome';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FramingPage from './pages/FramingPage';
import ArtistsPage from './pages/ArtistsPage';
import ScrollToTop from './components/ScrollToTop';
import ArtistDetailPage from './pages/ArtistDetailPage';
import LegalInformationPage from './pages/LegalInformationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const HeaderSwitcher: React.FC = () => {
  const location = useLocation();
  return location.pathname === '/' ? <HeaderHome /> : <Header />;
};

// ✅ SEO global + lang="fr"
const GlobalSEO: React.FC = () => {
  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Valeurs par défaut (chaque page peut les écraser) */}
      <title>Galerie MNC</title>
      <meta
        name="description"
        content="Galerie MNC : galerie d'art contemporain à Paris, dédiée aux estampes, peintures et sculptures."
      />
    </Helmet>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalSEO />

      <div className="font-sans text-gray-900">
        <HeaderSwitcher />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artistes" element={<ArtistsPage />} />
            <Route path="/artistes/:slug" element={<ArtistDetailPage />} />
            <Route path="/nous-contacter" element={<ContactPage />} />
            <Route path="/encadrement" element={<FramingPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/mentions-legales" element={<LegalInformationPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
