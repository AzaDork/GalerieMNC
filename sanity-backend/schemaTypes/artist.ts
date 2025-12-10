import { defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artiste',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom de l’artiste',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: true,
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-'),
      },
    },
    {
      name: 'bio',
      title: 'Biographie',
      type: 'text',
    },
    {
      name: 'exhibitions',
      title: 'Expositions',
      type: 'text', // zone de texte libre
    },
    {
      name: 'photo',
      title: 'Photo de l’artiste',
      type: 'image',
      options: { hotspot: true },
    },
  ],
});
