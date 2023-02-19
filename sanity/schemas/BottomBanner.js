export default {
  name: 'bottom_banner',
  title: 'Bottom Banner',
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
      name: 'sale',
      title: 'Sale Percentage',
      type: 'number',
    },
    {
      name: 'sale_period',
      title: 'Sale period',
      type: 'string',
    },
  ],
}
