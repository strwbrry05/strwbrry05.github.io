import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineMobile from "./TimelineMobile";

const Timeline = () => {
  return (
    <div className="bg-(--color-red) flex justify-center items-center ">
      <div className="w-[370px] md:w-[500px] lg:w-[950px] flex flex-col">
        <h2
          className="text-(--color-white) font-(family-name:--font-titles) 
        text-[2.75rem] px-[0.5em] py-[0.5em] pt-[1em] place-self-start
        md:text-[3rem] md:py-[0.4em] lg:text-[3.75rem]"
        >
          over the years...
        </h2>
        <div className="flex justify-center items-center w-[365px] mb-[5em] self-center">
          <TimelineMobile />
        </div>
        {/* desktop/bigger screens */}
        <div></div>
      </div>
    </div>
  );
};

export default Timeline;
