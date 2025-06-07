"use client";
import React from "react";
import HeroLeftSide from "./Components/HeroLeftSide";
import HeroRightSide from "./Components/HeroRightSide";

const Hero = () => {
  return (
    <div className="bg-[#F0EEED] lg:bg-[url('/images/herobg.png')] bg-[position:75%_100%] sm:bg-[position:100%_10%] bg-cover h-full w-full flex flex-col lg:flex-row justify-center items-center py-16">
      <HeroLeftSide />
      <HeroRightSide />
    </div>
  );
};

export default Hero;
