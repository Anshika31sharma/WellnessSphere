import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-extrabold ">
         Fix Health App
        </h1>
        <button
          onClick={toggleDarkMode}
          className="text-white bg-night-50 px-4 py-2 rounded-full"
        >
          <BiMoon className="hidden dark:block" />
          <BiSun className="dark:hidden" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
