import React, { useEffect } from 'react';
import SideMenu from '../SideMenu';
import TopBar from '../TopBar';
import Head from 'next/head';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gamify</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className="grid-layout flex flex-col p-5 bg-main-bg h-screen">
        <div className="top-bar md:pl-5">
          <TopBar />
        </div>
        <div className="side-menu" id="side-menu">
          <SideMenu />
        </div>
        <div className="content md:pl-5">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
