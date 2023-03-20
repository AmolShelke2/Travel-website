import React from "react";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
    </div>
  );
};

export default App;
