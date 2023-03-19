import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>BEACHES</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt4 size={20} />
      </div>
      <div>
        <ul>
          <h1>BEACHES.</h1>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Views</li>
          <li>Book</li>

          <div>
            <button>Search</button>
            <button>Account</button>
          </div>
          <div>
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
