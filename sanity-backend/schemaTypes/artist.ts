import { defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'featuredWorks',
      title: 'Featured Works',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
    },
  ],
})
