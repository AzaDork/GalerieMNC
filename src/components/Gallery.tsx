import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Espace salon avec fauteuils roses et tableau abstrait bleu et rose"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Espace de consultation avec fauteuils design en bois et estampe japonaise"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/6489123/pexels-photo-6489123.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Bureau moderne avec grande baie vitrée et tableau abstrait"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Coin salon élégant avec mobilier contemporain"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/6489094/pexels-photo-6489094.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Espace d'exposition avec éclairage naturel"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-2">
          {/* Large image */}
          <div className="col-span-12 md:col-span-8 h-[300px] md:h-[600px]">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Two medium images */}
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-2 h-[300px] md:h-[600px]">
            {images.slice(1, 3).map((image) => (
              <div key={image.id} className="h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Two bottom images */}
          <div className="col-span-6 h-[200px] md:h-[400px]">
            <img
              src={images[3].url}
              alt={images[3].alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="col-span-6 h-[200px] md:h-[400px]">
            <img
              src={images[4].url}
              alt={images[4].alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;