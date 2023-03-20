import React from "react";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
      <Search />
    </div>
  );
};

export default App;
