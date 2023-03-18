import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <h1>BEACHES</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
