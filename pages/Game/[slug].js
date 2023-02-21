import React from 'react';
import DetailsLayout from '../../components/layouts/DetailsLayout';
import { client } from '../../library/sanityClient';

const GameDetails = ({ game }) => {
  const { title, price, slug, genre, image, desc } = game;

  return (
    <>
      <div>
        <div className="image-slider"></div>
        <div className="content">
          <h2>{title}</h2>
          <p>{genre}</p>
          <p>{desc}</p>
          <p>{price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "Games" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const { slug = '' } = context.params;
  const games = `*[_type == "Games" && slug.current == $slug][0]`;
  const game = await client.fetch(games, { slug });

  return {
    props: {
      game,
    },
  };
};

GameDetails.Layout = DetailsLayout;

export default GameDetails;
