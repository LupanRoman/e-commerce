import React from 'react';
import Image from 'next/image';
import { urlFor } from '../library/sanityClient';

const TopBanner = ({ topBannerData }) => {
  return (
    <>
      <div className="top-banner-component rounded-lg flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-5 pb-5 md:pr-5">
        <div className="top-banner-content flex flex-col items-center md:pl-5 md:items-start md:gap-2 xl:pl-24">
          <h3 className="font-bold text-lg md:text-3xl">Upcoming</h3>
          <div className="flex flex-col items-center md:items-start md:gap-5">
            <h1 className="font-bold md:text-6xl md:w-72">
              {topBannerData[0].title}
            </h1>
            <p className="md:text-lg">{topBannerData[0].release_date}</p>
          </div>
        </div>
        <div className="banner-image xl:pr-24">
          <img
            src={urlFor(topBannerData[0].image)}
            alt=""
            height={250}
            width={200}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default TopBanner;
