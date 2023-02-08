export default {
  name: 'top_banner',
  title: 'Top Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'release_date',
      title: 'Release date',
      type: 'string',
    },
  ],
}
