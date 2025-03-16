import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSelling from "../Components/BestSelling";
import Newsletter from "../Components/Newsletter";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <LatestCollection />
      <BestSelling />
      <OurPolicy />
      <Newsletter />
    </div>
  );
};

export default Home;
