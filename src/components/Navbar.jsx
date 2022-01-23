import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../custom-hooks/useDarkMode";

const Navbar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold ">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-6 text-center text-black text-16">
            <li className="cursor-pointer mb-1">Features</li>
            <li className="cursor-pointer mb-1">Menu</li>
            <li className="cursor-pointer mb-1">Our Story</li>
            <li className="cursor-pointer mb-1">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
