import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '/GalerieMNC_logo.png';
import { Link } from 'react-router-dom';

const HeaderHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerBg, setHeaderBg] = useState('bg-transparent');

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
            <div className="flex space-x-4 mb-4">
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
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link to="/artistes" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Artistes
                  </Link>
                </li>
                <li>
                  <Link to="/encadrement" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Encadrement
                  </Link>
                </li>
                <li>
                  <Link to="/nous-contacter" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Nous Contacter
                  </Link>
                </li>
                <li>
                  <Link to="/a-propos" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    À Propos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '72px' }}
      >
        <nav className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://instagram.com/galeriemnc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com/galeriemnc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-500 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
          <ul className="space-y-6">
            <li>
              <Link 
                to="/artistes" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Artistes
              </Link>
            </li>
            <li>
              <Link 
                to="/encadrement" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Encadrement
              </Link>
            </li>
            <li>
              <Link 
                to="/nous-contacter" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Nous Contacter
              </Link>
            </li>
            <li>
              <Link 
                to="/a-propos" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                À Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderHome;