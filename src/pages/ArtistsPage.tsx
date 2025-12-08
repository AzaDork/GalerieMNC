import React, { useEffect, useState } from 'react';
import Artists from '../components/Artists';
import { sanityClient } from '../utils/sanity';

interface Artist {
  _id: string;
  name: string;
  bio: string;
  photo?: { asset?: { url?: string } };
}

const ArtistsPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    document.title = 'Artistes | Galerie MNC';

    const query = `*[_type == "artist"]{
      _id,
      name,
      bio,
      photo { asset->{url} }
    }`;

    sanityClient.fetch(query)
      .then((data) => {
        console.log('ARTISTS FROM SANITY:', data);
        setArtists(data);
      })
      .catch((error) => {
        console.error('Erreur Sanity :', error);
      });

  }, []);

  return (
    <div className="pt-40">
      <Artists artists={artists} />
    </div>
  );
};

export type { Artist };
export default ArtistsPage;
