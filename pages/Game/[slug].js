import React, { useState } from 'react';
import DetailsLayout from '../../components/layouts/DetailsLayout';
import { client, urlFor } from '../../library/sanityClient';

const GameDetails = ({ game }) => {
  const { title, price, slug, genre, image, desc } = game;
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className='flex flex-col md:flex-row pt-20 gap-5'>
        <div className="image-showcase flex flex-col justify-center items-center gap-10 md:w-1/2">
          <img src={urlFor(image && image[index])} width={350} alt="" className='rounded-lg'/>
          <div className='image-gallery flex flex-wrap md:flex-nowrap flex-row justify-center pb-10 gap-1 md:gap-2 '>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                width={80}
                className='object-cover'
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="content pb-20 flex flex-col gap-2 md:w-1/2">
          <h2 className='text-3xl font-headings'>{title}</h2>
          <p className='text-lg font-light'>{genre}</p>
          <p className='font-light self-center'>{desc}</p>
          <p className='text-2xl font-headings'>{price}</p>
          <button className='bg-buy-btn self-center pl-5 pr-5 pt-2 pb-2 rounded-xl text-xl font-headings'>Add to cart</button>
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
