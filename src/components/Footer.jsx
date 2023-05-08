import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between">
          <h1 className="mb-8 uppercase">beaches</h1>
          <div className="flex justify-between w-full sm:max-w-[200px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <FaGithub className="icon" />
          </div>
        </div>
        <div className="w-full">
          <ul className="mb-4 md:flex">
            <li className="md:border-r md:border-black">Home</li>
            <li className="md:border-r md:border-black">Destinations</li>
            <li className="md:border-r md:border-black">Travel</li>
            <li className="md:border-r md:border-black">Views</li>
            <li>Book</li>
          </ul>
        </div>
        <p className="shadow-sm capitalize">
          Design and developed by Amol Shelke❤️
        </p>
      </div>
    </div>
  );
};

export default Footer;
