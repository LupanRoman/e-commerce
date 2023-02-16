import Link from 'next/link';
import React from 'react';
import BottomBanner from '../components/BottomBanner';
import Game from '../components/Game';
import HomeLayout from '../components/layouts/HomeLayout';
import TopBanner from '../components/TopBanner';
import { client } from '../library/sanityClient';

const index = ({ games, topBanner }) => {
  return (
    <>
      <div className="pt-5 md:pt-0 md:pl-10 md:pr-10">
        <div>
          <TopBanner topBannerData={topBanner} />
          {console.log(topBanner)}
        </div>
        <div className="bs pt-10">
          <h3 className="font-bold text-xl md:text-2xl">Best Selling</h3>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            {games.map((game) => (
              <Game game={game} key={game._id} />
            ))}
            {console.log(games)}
          </div>
        </div>

        <div>{/* <BottomBanner /> */}</div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const games = await client.fetch(`*[_type == "Games"]`);

  const topBannerQuery = `*[_type == "top_banner"]`;

  const topBanner = await client.fetch(topBannerQuery);

  return {
    props: {
      games,
      topBanner,
    },
  };
};

index.Layout = HomeLayout;

export default index;
