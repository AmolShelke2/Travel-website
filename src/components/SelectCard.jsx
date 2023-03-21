import React from "react";

const SelectCard = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="/" className="object-cover h-full w-full" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute left-4 bottom-4 font-bold text-xl text-white">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
