import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineMobile from "./TimelineMobile";

const Timeline = () => {
  return (
    <div className="bg-(--color-red) flex flex-col justify-center items-center">
      <h2
        className="text-(--color-white) font-(family-name:--font-titles) 
        text-[2.75rem] px-[0.5em] py-[0.5em] pt-[1em] self-start"
      >
        over the years...
      </h2>
      <div className="flex justify-center items-center w-[365px] mb-[5em]">
        <TimelineMobile />
      </div>
      {/* desktop/bigger screens */}
      <div></div>
    </div>
  );
};

export default Timeline;
