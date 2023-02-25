import React from 'react';
import BottomBanner from '../components/BottomBanner';
import Game from '../components/Game';
import DetailsLayout from '../components/layouts/DetailsLayout';
import TopBanner from '../components/TopBanner';
import { client } from '../library/sanityClient';

const index = ({ games, topBanner, bottomBanner }) => {
  return (
    <>
      <div className="pt-5 md:pt-0 md:pl-10 md:pr-10">
        <div>
          <TopBanner topBannerData={topBanner} />
        </div>
        <div className="bs pt-10 mb-20">
          <h3 className="font-bold text-xl md:text-2xl">Best Selling</h3>
          <div className="game-component justify-center items-end gap-5">
            {games.map((game) => (
              <Game game={game} key={game._id} />
            ))}
          </div>
        </div>
        <div className="pb-10">
          <BottomBanner bottomBanner={bottomBanner} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const games = await client.fetch(`*[_type == "Games"]`);

  const topBannerQuery = `*[_type == "top_banner"]`;
  const bottomBannerData = `*[_type == "bottom_banner"]`;

  const topBanner = await client.fetch(topBannerQuery);
  const bottomBanner = await client.fetch(bottomBannerData);

  return {
    props: {
      games,
      topBanner,
      bottomBanner,
    },
  };
};

index.Layout = DetailsLayout;

export default index;
