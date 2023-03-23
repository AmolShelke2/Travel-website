import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <h1>BEACHES</h1>
        <div className="">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
