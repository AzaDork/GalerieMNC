import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";

const ArtistDetailPage = () => {
  const { slug } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const query = `*[_type == "artist" && slug.current == $slug][0]{
      _id,
      name,
      bio,
      photo { asset->{url} }
    }`;

    sanityClient.fetch(query, { slug }).then(setArtist);
  }, [slug]);

  if (!artist) return <p>Chargement...</p>;

  return (
    <div className="pt-40 max-w-3xl mx-auto">
      <img
        src={artist.photo.asset.url}
        alt={artist.name}
        className="w-full rounded-md mb-8"
      />
      <h1 className="text-4xl font-light mb-4">{artist.name}</h1>
      <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
    </div>
  );
};

export default ArtistDetailPage;
