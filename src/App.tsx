import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderHome from './components/HeaderHome';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FramingPage from './pages/FramingPage';
import ScrollToTop from './components/ScrollToTop';


const HeaderSwitcher: React.FC = () => {
  const location = useLocation();
  return location.pathname === '/' ? <HeaderHome /> : <Header />;
};

function App() {
  return (
    <Router basename="/GalerieMNC">
      <ScrollToTop />
      <div className="font-sans text-gray-900">
        <HeaderSwitcher />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nous-contacter" element={<ContactPage />} />
            <Route path="/encadrement" element={<FramingPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
