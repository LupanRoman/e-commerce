import React from 'react';
import { urlFor } from '../library/sanityClient';

const BottomBanner = ({ bottomBanner }) => {
  return (
    <>
      <div className="bottom-banner-component flex flex-col items-center rounded-lg md:flex-row justify-between gap-10 pt-5 pb-5 md:pl-5 md:pr-5">
        <div>
          <img
            src={urlFor(bottomBanner[0].image)}
            alt="image og the game Hogwarts"
            height={250}
            width={200}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:pr-10">
          <h1 className="text-lg md:text-xl font-medium">Summer Sale</h1>
          <p className="text-3xl md:text-5xl font-headings">
            {bottomBanner[0].title}
          </p>
          <p className="font-headings text-xl md:text-2xl">{`${bottomBanner[0].sale}%`}</p>
          <p>{bottomBanner[0].sale_period}</p>
          <button className="pl-5 pr-5 pt-2 pb-2 rounded-lg font-bold bg-menu-btn mt-5 md:mt-0">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;
