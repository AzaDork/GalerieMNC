import { defineType } from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Œuvre',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Édition',
      type: 'string',
    },
    {
      name: 'medium',
      title: 'Technique',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'artist',
      title: 'Artiste',
      type: 'reference',
      to: [{ type: 'artist' }],
    },
  ],
})
