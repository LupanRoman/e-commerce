import Image from 'next/image';
import React from 'react';
import { urlFor } from '../library/sanityClient';

const Game = ({ game }) => {
  return (
    <>
      <div className="game-card flex flex-col justify-center items-center pt-5 mb-20">
        <img src={urlFor(game.image[0])} alt="" height={250} width={200} />
        <div className="game-title">
          <h2>{game.title}</h2>
          <p>{`$${game.price}`}</p>
        </div>
        {/* On hover over the game component display the price */}
      </div>
    </>
  );
};

export default Game;
