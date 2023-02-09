// import sanityClient from '@sanity/client';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'wzchkd1b',
  dataset: 'production',
  apiVersion: '2023-02-09',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
