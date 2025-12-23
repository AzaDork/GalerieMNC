import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '/GalerieMNC_logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerBg, setHeaderBg] = useState('bg-transparent');

  const { t, i18n } = useTranslation();

  const switchLang = (lng: 'fr' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  // Effet pour le changement de background au scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const maxScroll = 200;
      const scrollProgress = Math.min(1, offset / maxScroll);

      if (offset > 50) {
        setScrolled(true);
        setHeaderBg(`rgb(255 255 255 / ${scrollProgress})`);
      } else {
        setScrolled(false);
        setHeaderBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effet pour bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? 'shadow-md py-3' : 'py-6'
      }`}
      style={{ backgroundColor: headerBg }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center h-24">
            <img
              src={logo}
              alt="Galerie MNC"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://instagram.com/galeriemnc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/galeriemnc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Facebook size={20} />
              </a>

              {/* Language switch */}
              <div className="flex space-x-2 ml-4 text-xs">
                <button
                  onClick={() => switchLang('fr')}
                  className={`uppercase tracking-widest ${
                    i18n.language === 'fr'
                      ? 'font-semibold text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  FR
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => switchLang('en')}
                  className={`uppercase tracking-widest ${
                    i18n.language === 'en'
                      ? 'font-semibold text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/artistes"
                    className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
                  >
                    {t('nav.artists')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/encadrement"
                    className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
                  >
                    {t('nav.framing')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Bouton de fermeture (croix) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-3 z-50 text-gray-900 hover:text-gray-500"
        >
          <X size={32} />
        </button>

        <nav className="container mx-auto px-4 py-20">
          {/* Top bar : logo gauche / réseaux droite */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center h-20"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={logo}
                alt="Galerie MNC"
                className="h-24 w-24 object-contain"
              />
            </Link>

            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/galeriemnc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com/galeriemnc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>

          {/* Liens de navigation */}
          <ul className="space-y-6">
            <li>
              <Link
                to="/artistes"
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.artists')}
              </Link>
            </li>
            <li>
              <Link
                to="/encadrement"
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.framing')}
              </Link>
            </li>
            <li>
              <Link
                to="/a-propos"
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
            </li>
          </ul>

          {/* Mobile language switch */}
          <div className="flex justify-center mt-10 space-x-6 text-sm">
            <button
              onClick={() => switchLang('fr')}
              className={i18n.language === 'fr' ? 'font-semibold' : 'text-gray-400'}
            >
              FR
            </button>
            <button
              onClick={() => switchLang('en')}
              className={i18n.language === 'en' ? 'font-semibold' : 'text-gray-400'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderHome;
