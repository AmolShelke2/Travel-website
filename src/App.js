import React from "react";
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
    </div>
  );
};

export default App;
