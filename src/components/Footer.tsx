import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white">
      <div className="border-t border-black w-full"></div>
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Galerie MNC</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Une galerie d'art contemporain dédiée aux estampes, peintures et sculptures d'artistes émergents et établis.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/galeriemnc" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="https://facebook.com/galeriemnc" className="text-gray-600 hover:text-black transition-colors">
                <Facebook size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Navigation</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="/artistes" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Artistes
                </a>
              </li>
              <li>
                <a href="/oeuvres" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Oeuvres
                </a>
              </li>
              <li>
                <a href="/encadrement" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Encadrement
                </a>
              </li>
              <li>
                <a href="/nous-contacter" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Nous Contacter
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  À Propos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Contact</h3>
            <address className="not-italic text-sm md:text-base text-gray-600">
              <p>36 rue des Saints-Pères</p>
              <p>75007 Paris, France</p>
              <p className="mt-2 md:mt-4">Tél : 01 45 44 55 27</p>
              <p>Email : gmnc@club-internet.fr</p>
            </address>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Informations Légales</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="/mentions-legales" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="text-sm md:text-base text-gray-600 hover:text-black transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;