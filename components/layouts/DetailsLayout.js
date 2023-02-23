import React from 'react';
import TopBar from '../TopBar';
import Head from 'next/head';

const DetailsLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gamify</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className='page'>
        <TopBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default DetailsLayout;
