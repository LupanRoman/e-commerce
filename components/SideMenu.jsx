import React from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import { useStateContext } from '../context/StateContext';

const SideMenu = () => {
  const { closeMenu } = useStateContext();

  return (
    <>
      <div className="relative">
        <div className="flex flex-col gap-5 pr-10 md:pr-0">
          <Image
            src={'/icon.svg'}
            alt="An image with a mini game"
            width={100}
            height={100}
            className=" hidden md:flex ml-auto mr-auto pt-5"
            priority
          />
          <h1 className="font-bold text-xl pl-10 pt-10 md:hidden">Gamify</h1>
          <button
            className="md:hidden bg-menu-btn p-2 absolute -right-8"
            onClick={closeMenu}
          >
            {<IoIosArrowBack />}
          </button>
          <div className="links flex flex-col gap-2 pl-5">
            <Link href={''}>
              <h3 className="font-bold text-lg">Home</h3>
            </Link>
            <div>
              <h3 className="font-bold text-lg">Genres</h3>
              <ul>
                <Link href={''}>
                  <li>Action</li>
                </Link>
                <Link href={''}>
                  <li>RPG</li>
                </Link>
                <Link href={''}>
                  <li>Arcade</li>
                </Link>
                <Link href={''}>
                  <li>Strategy</li>
                </Link>
                <Link href={''}>
                  <li>Racing</li>
                </Link>
                <Link href={''}>
                  <li>Adventure</li>
                </Link>
                <Link href={''}>
                  <li>Simulation</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
