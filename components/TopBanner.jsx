import React from 'react';
import Image from 'next/image';
import Rdr from '../public/rdr.jpg';

const TopBanner = () => {
  return (
    <>
      <div className="top-banner-component relative">
        <div className="top-banner-content absolute">
          <h1>Red Dead Redemption</h1>
          <p>image of the game</p>
          <p>11.04.20020</p>
        </div>
        <Image
          className="top-banner-bg-image absolute"
          src={Rdr}
          // width={1080}
          // height={500}
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default TopBanner;
