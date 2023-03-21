import React from "react";
import Corousel from "./components/Corousel";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
      <Search />
      <Selects />
      <Corousel />
    </div>
  );
};

export default App;
