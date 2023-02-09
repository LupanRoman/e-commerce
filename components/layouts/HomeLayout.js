import React from 'react';
import SideMenu from '../SideMenu';
import TopBar from '../TopBar';

const HomeLayout = ({ children }) => {
  return (
    <>
    <div>
      <TopBar />
      <SideMenu />
      <div>{children}</div>
    </div>
    </>
  );
};

export default HomeLayout;
