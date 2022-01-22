import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-16 font-semibold ">
        {openMenu ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
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
