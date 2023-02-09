import React from 'react';
import TopBar from '../TopBar';

const DetailsLayout = ({ children }) => {
  return (
    <>
      <div>
        <TopBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default DetailsLayout;
