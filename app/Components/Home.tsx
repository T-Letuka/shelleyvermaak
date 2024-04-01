import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import GeneralServices from "./GeneralServices/GeneralServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <GeneralServices />
    </div>
  );
};

export default Home;
