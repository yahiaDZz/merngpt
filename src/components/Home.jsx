import React from "react";
import Navbar from "./Navbar";
import Prism from "prismjs";
import "../prism.css";
import HomeHeader from "./HomeHeader";
import HomeSubheader from "./HomeSubheader";
const Home = () => {
  const code = `.btn--green {
    background-color: #bada55;
   }`;
  return (
    <div className="">
      <Navbar />
      <HomeHeader />
      <HomeSubheader />
    </div>
  );
};

export default Home;
