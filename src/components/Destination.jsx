import React from "react";

import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Keywest from "../assets/keywest.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          src={Borabora}
          alt="/"
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
        />
        <img src={Borabora2} alt="/" className="w-full h-full object-cover" />
        <img src={Maldives} alt="/" className="w-full h-full object-cover" />
        <img src={Maldives2} alt="/" className="w-full h-full object-cover" />
        <img src={Keywest} alt="/" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Destination;
