import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Page d’accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'highlightedArtworks',
      title: 'Œuvres mises en avant (section Nouveautés)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artwork' }],
        },
      ],
      description: 'Sélectionne les œuvres à afficher dans le carrousel des nouveautés.',
    }),
  ],
});
