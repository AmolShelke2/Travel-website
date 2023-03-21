import React from "react";

import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/keywest.jpg";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
        <img src={Maldives} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="absolute left-4 bottom-4 font-bold text-xl text-white">
            Maldives
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selects;
