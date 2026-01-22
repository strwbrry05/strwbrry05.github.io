import React from "react";
import HeroCard from "./HeroCard";
import pan from "../assets/heroPan.png";
import hobonichi from "../assets/heroHobonichi.png";

const Hero = () => {
  return (
    <div>
      <HeroCard
        icon={hobonichi}
        alt={"journal"}
        w={120}
        desc={
          "my journal, diary, and time keeper. an absolute essential for me to complete and organize tasks of all callibers. i love to-do lists and scheduling my day; without my hobonichi i would be lost in the void."
        }
        isTitleReverse={false}
        isReverse={false}
      />

      <HeroCard
        icon={pan}
        alt={"stuffed animal"}
        w={80}
        desc={
          "stuffed animals provide a sense of comfort and nostalgia. they remind me to remain whimsical in a society that attempts to rob you of it. i keep many stuffed animals but this $5 christmas charm CHARMED me more than i thought possible. i lost him once and i wont do it again."
        }
        isTitleReverse={false}
        isReverse={true}
      />
    </div>
  );
};

export default Hero;
