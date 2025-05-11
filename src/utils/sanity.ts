import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xqschecv', 
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
