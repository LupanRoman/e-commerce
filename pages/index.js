import Link from 'next/link';
import React from 'react';
import BottomBanner from '../components/BottomBanner';
import Game from '../components/Game';
import HomeLayout from '../components/layouts/HomeLayout';
import TopBanner from '../components/TopBanner';
import { client } from '../library/sanityClient';

const index = ({ games }) => {
  return (
    <>
      <div className="pt-5 md:pt-0 md:pl-10 md:pr-10">
        <div>
          <TopBanner />
        </div>
        <div className="bs">
          {/* <h3>Best Selling</h3> */}
          {/* <Game /> */}
        </div>

        <div>{/* <BottomBanner /> */}</div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const games = await client.fetch(`*[_type == "Games"]`);

  return {
    props: {
      games,
    },
  };
}

index.Layout = HomeLayout;

export default index;
