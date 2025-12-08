import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xqschecv',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export const artistsQuery = `*[_type == "artist"]{
  _id,
  name,
  bio,
  "imageUrl": image.asset->url
}`;
