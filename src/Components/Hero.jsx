import React from "react";
import HeroCard from "./HeroCard";

import HeroMobile from "./HeroMobile";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div
        className="w-[360px] flex flex-col gap-y-[1.5em]
      
      md:w-[750px] lg:hidden"
      >
        <HeroMobile />
      </div>
    </div>
  );
};

export default Hero;
