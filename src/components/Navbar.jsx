import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    setLogo(!logo);
  };

  return (
    <div
      className="flex w-full justify-between items-center
     h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"} onClick={handleNav}>
          BEACHES
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger menu */}
      <div
        className="md:hidden z-10 cursor-pointer text-white"
        onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }>
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Views</li>
          <li className="border-b">Book</li>

          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <FaGithub className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
