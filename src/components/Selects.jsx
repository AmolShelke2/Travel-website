import React from "react";

import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/keywest.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={Borabora} text="Borabora" />
      <SelectCard bg={Borabora2} text="Colorado" />
      <SelectCard bg={Keywest} text="Massachusetts" />
      <SelectCard bg={Maldives3} text="Wisconsin" />
      <SelectCard bg={Maldives2} text="Louisiana" />
      <SelectCard bg={Maldives} text="Maldives" />
    </div>
  );
};

export default Selects;
