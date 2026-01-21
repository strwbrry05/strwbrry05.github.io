import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineMobile from "./TimelineMobile";

const Timeline = () => {
  const timeline03Content = (
    <span>
      data structures <br /> peer instructor
    </span>
  );
  return (
    <div className="bg-(--color-red)">
      <h2
        className="text-(--color-white) font-(family-name:--font-titles) 
        text-[2.75rem] px-[0.5em] py-[0.5em] pt-[1em]"
      >
        over the years...
      </h2>
      <TimelineMobile />
      {/* desktop/bigger screens */}
      <div></div>
    </div>
  );
};

export default Timeline;
