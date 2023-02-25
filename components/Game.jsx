import Link from 'next/link';
import React from 'react';
import { urlFor } from '../library/sanityClient';

const Game = ({ game: { image, title, price, slug, bestSelling } }) => {
  return (
    <>
      {bestSelling == true ? (
        <Link href={`/game/${slug.current}`}>
          <div className="game-card flex flex-col justify-center pt-5 md:mb-10">
            <img
              src={urlFor(image[0])}
              alt="image of the game displayed"
              height={200}
              width={200}
              className="rounded-xl"
            />
            <div className="game-title flex flex-col items-center">
              <h2 className="text-lg">{title}</h2>
              <p>{`$${price}`}</p>
            </div>
            {/* On hover over the game component display the price */}
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default Game;
