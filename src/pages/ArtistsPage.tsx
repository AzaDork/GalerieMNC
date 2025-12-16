import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Artists from '../components/Artists';
import { sanityClient } from '../utils/sanity';

interface Artist {
  _id: string;
  name: string;
  bio: string;
  exhibitions: string;
  photo?: any; // ✅ objet image Sanity
  slug: { current: string };
}

const ArtistsPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "artist" && defined(slug.current)] | order(name asc){
      _id,
      name,
      bio,
      exhibitions,
      slug,
      photo
    }`;

    sanityClient
      .fetch(query)
      .then((data) => setArtists(data))
      .catch((error) => console.error('Erreur Sanity :', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-40">
      <Helmet>
        <title>Artistes contemporains | Galerie MNC – Paris</title>
        <meta
          name="description"
          content="Découvrez les artistes contemporains représentés par la Galerie MNC à Paris : biographie, expositions et œuvres."
        />
        <link rel="canonical" href="https://galeriemnc.com/artistes" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-light mb-3">Artistes</h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Découvrez les artistes contemporains représentés par la Galerie MNC à Paris.
          Accédez à chaque artiste pour consulter sa biographie, ses expositions et une sélection d’œuvres.
        </p>
      </div>

      {loading ? (
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 py-10">
          Chargement des artistes…
        </div>
      ) : (
        <Artists artists={artists} />
      )}
    </div>
  );
};

export type { Artist };
export default ArtistsPage;
