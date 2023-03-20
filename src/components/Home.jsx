import React from "react";
import beachVid from "../assets/beachVid.mp4";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={beachVid}
      />
    </div>
  );
};

export default Home;
