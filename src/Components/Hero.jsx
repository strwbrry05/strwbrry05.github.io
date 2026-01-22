import React, { useState } from "react";
import HeroCard from "./HeroCard";

import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col justify-center items-center">
      {/* mobile/tablet view */}
      <div
        className="w-[360px] flex flex-col gap-y-[1.5em]
      md:w-[750px] lg:hidden"
      >
        <HeroMobile isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>
      {/* desktop+ view */}
      <div className="hidden lg:flex w-[915px] justify-center items-center">
        <HeroDesktop isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>
    </div>
  );
};

export default Hero;
