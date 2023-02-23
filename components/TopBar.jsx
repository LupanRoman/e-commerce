import React from 'react';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';
import { AiFillShopping } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { useStateContext } from '../context/StateContext';

const TopBar = () => {
  // const { openMenu } = useStateContext();

  const darkMode = () => {
    document.body.classList.toggle('dark');
  };

  const lightMode = () => {
    document.body.classList.remove('dark');
  };

  return (
    <>
      <div className="flex items-center justify-between md:pl-10 md:pr-10 pt-5 pb-5">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-xl dark:text-red-500">Gamify</h1>
        </div>
        <div className="flex gap-3 items-center">
          <BiMoon
            className="flex dark:hidden text-sm cursor-pointer"
            onClick={darkMode}
          />
          <BiSun
            className="hidden dark:flex cursor-pointer"
            onClick={lightMode}
          />
          <div className="flex">
            <AiFillShopping className="text-xl cursor-pointer" />
            <span className="">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
