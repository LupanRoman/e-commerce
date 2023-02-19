import React from 'react';
import DetailsLayout from '../../components/layouts/DetailsLayout';

const GameDetails = () => {
  return (
    <>
      <div>
        <div className="image-slider"></div>
        <div className="content">
          <h2>title</h2>
          <p>genre</p>
          <p>description</p>
          <p>price</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

GameDetails.Layout = DetailsLayout;

export default GameDetails;
