import React, { useEffect, useState } from 'react';
import Artists from '../components/Artists';
import { sanityClient } from '../utils/sanity';

interface ArtWork {
  _id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: { asset: { url: string } };
}

export interface Artist {
  _id: string;
  name: string;
  bio: string;
  photo: { asset: { url: string } }
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

    sanityClient.fetch(query).then(setArtists);
  }, []);

  return (
    <div className="pt-40">
      <Artists artists={artists} />
    </div>
  );
};

export default ArtistsPage;
