"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openExploreEmilistModal, setOpenExploreEmilistModal] = useState(false);

  const onCancel = () => {
    setOpenExploreEmilistModal(false);
  };

  const toggle = () => {
    setOpenSideBar((prev) => !prev);
    setMenu(false);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
    setOpenSideBar(false);
  };

  return (
    <header className="px-4 md:px-8 py-4 fixed w-full bg-white z-20 shadow-sm">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
        <Link href="/">
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] bg-[#4caf50] rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="font-semibold text-lg text-black">milist</span>
          </div>
        </Link>
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-4 text-gray-900">
            <li>
              <Link
                href="/expert/register/"
                className="font-medium px-4 py-2 hover:text-[#4caf50] transition-colors"
              >
                Join as an Expert
              </Link>
            </li>
            <li>
              <Link
                href="/list-new-job"
                className="font-medium px-4 py-2 hover:text-[#4caf50] transition-colors"
              >
                List New Job
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-1 font-medium px-4 py-2 hover:text-[#4caf50] transition-colors"
                onClick={() => setOpenExploreEmilistModal(true)}
              >
                Explore Emilist
                <IoIosArrowDown className="ml-1" />
              </button>
            </li>
            <li>
              <Link
                href="/login"
                className="font-medium px-4 py-2 hover:text-[#4caf50] transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="font-medium px-4 py-2 hover:text-[#4caf50] transition-colors"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 lg:hidden">
          <button className="block text-xl text-gray-800" onClick={toggle}>
            <CgMenuRight />
          </button>
        </div>
      </div>
      <div className="relative border-t border-gray-100 w-full py-2 lg:hidden flex items-center gap-2 max-w-[1200px] mx-auto">
        <button className="flex items-center gap-1" onClick={toggleMenu}>
          <AnimatePresence>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: menu ? 90 : 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              <MdKeyboardArrowRight />
            </motion.span>
          </AnimatePresence>
          Menu
        </button>
      </div>
    </header>
  );
};

export default Nav;
