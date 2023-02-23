import React from 'react';
import { urlFor } from '../library/sanityClient';

const BottomBanner = ({ bottomBanner }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-banner-bg rounded-lg md:flex-row justify-between gap-10 pt-5 pb-5 md:pl-5 md:pr-5">
        <div>
          <img
            src={urlFor(bottomBanner[0].image)}
            alt=""
            height={250}
            width={200}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-2xl font-bold">Summer Sale</h1>
          <p className="text-lg md:text-2xl font-bold">
            {bottomBanner[0].title}
          </p>
          <p>{`${bottomBanner[0].sale}%`}</p>
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
