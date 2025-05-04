import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Nouveaute: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    {
      id: 1,
      title: "Sans titre",
      artist: "Jean-Michel Alberola",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/oeuvres/alberola-sans-titre"
    },
    {
      id: 2,
      title: "Composition #4",
      artist: "Pierre Alechinsky",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/oeuvres/alechinsky-composition-4"
    },
    {
      id: 3,
      title: "Nature morte",
      artist: "Georg Baselitz",
      image: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/oeuvres/baselitz-nature-morte"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length);
  };

  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-12 pl-4">Nouveautés</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            {/* Left Navigation Button */}
            <button
              onClick={prevSlide}
              className="mr-4 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Artwork Display */}
            <div className="relative aspect-[3/2] flex-grow overflow-hidden bg-white rounded-lg shadow-lg">
              {artworks.map((artwork, index) => (
                <a
                  key={artwork.id}
                  href={artwork.link}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                  }`}
                >
                  <img
                    src={artwork.image}
                    alt={`${artwork.title} by ${artwork.artist}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-serif mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">{artwork.artist}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={nextSlide}
              className="ml-4 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to artwork ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nouveaute;