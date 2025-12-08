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
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biographie',
      type: 'text',
    },
    {
      name: 'photo',
      title: 'Photo de l’artiste',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'featuredWorks',
      title: 'Œuvres mises en avant',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
    },
  ],
})
