import Image from 'next/image';
import React from 'react';
import { urlFor } from '../library/sanityClient';

const Game = ({ game }) => {
  return (
    <>
      {game.bestSelling == true ? (
        <div className="game-card flex flex-col justify-center items-center pt-5 md:mb-20">
          <img
            src={urlFor(game.image[0])}
            alt=""
            height={250}
            width={200}
            className="rounded-xl"
          />
          <div className="game-title flex flex-col items-center">
            <h2 className="text-lg">{game.title}</h2>
            <p>{`$${game.price}`}</p>
          </div>
          {/* On hover over the game component display the price */}
        </div>
      ) : null}
    </>
  );
};

export default Game;
