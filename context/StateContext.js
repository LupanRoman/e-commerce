import React, { createContext, useContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  // const openMenu = () => {
  //   const sideMenu = document.getElementById('side-menu');
  //   sideMenu.classList.toggle('active');
  // };

  // const closeMenu = () => {
  //   const sideMenu = document.getElementById('side-menu');
  //   sideMenu.classList.remove('active');
  // };

  return (
    <Context.Provider
      value={{
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
