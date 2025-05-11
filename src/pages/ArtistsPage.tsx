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
  featured: boolean;
  photo: { asset: { url: string } };
  featuredWorks: ArtWork[];
}

const ArtistsPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    document.title = 'Artistes | Galerie MNC';

    const query = `*[_type == "artist"]{
      _id,
      name,
      bio,
      featured,
      photo { asset->{url} },
      featuredWorks[]->{
        _id,
        title,
        year,
        medium,
        dimensions,
        image { asset->{url} }
      }
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
