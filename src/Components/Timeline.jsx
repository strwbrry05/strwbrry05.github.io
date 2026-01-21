import React from "react";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  return (
    <div className="bg-(--color-red)">
      <h2
        className="text-(--color-white) font-(family-name:--font-titles) 
        text-[2.75rem] px-[0.5em] py-[0.5em] pt-[1em]"
      >
        over the years...
      </h2>
      {/* mobile/tablet view */}
      <div className="md:hidden flex justify-center items-center">
        {/* grid */}
        <div
          className="grid grid-cols-6 grid-rows-10 w-[375px]
        font-(family-name:--font-formal)"
        >
          {/* straight vertical line */}
          <p
            className="w-[2px] h-[500px] bg-(--color-white)
            row-start-1 row-end-10 col-start-1 col-end-2 justify-self-center"
          ></p>
          <TimelineCard
            hRS={0}
            hRE={3}
            hCS={1}
            hCE={3}
            hW={85}
            cW={60}
            cRS={1}
            cRE={3}
            cCS={3}
            cCE={5}
            cNum={"01"}
            cNumSize={1.25}
            tRS={1}
            tRE={3}
            tCS={4}
            tCE={7}
            tYear={"2020-2021"}
            tTitle={"intro to sql tutor"}
            dRS={2}
            dRE={6}
            dCS={2}
            dCE={7}
            desc={
              "Operated one-on-one and small group instruction for 20+ students, indeveloping SQL comprehension and relational database skills. Assisted students with complex coursework, including helping them develop better study habits."
            }
          />
          {/* <div
            className={`h-[0.5px] w-[50px] ml-[2em]
          row-start-6 row-end-6 col-start-1 col-end-3
          border-dashed border-t-(--color-white) border-t-[2px]`}
          ></div>
          <div
            className={`w-[80px] h-[80px] bg-(--color-white) rounded-[100%]
          row-start-5 row-end-7 col-start-2 col-end-4 
          justify-self-start self-center
          
          flex justify-center items-center`}
          >
            <p
              className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.5rem]`}
            >
              02
            </p>
          </div>
          <div
            className={`text-(--color-white) font-bold
          row-start-5 row-end-7 
          col-start-3 col-end-7
          
          flex flex-col items-center justify-center
          leading-5 mr-[1em]`}
          >
            <h3>2023-2024</h3>
            <h3>document lead</h3>
          </div>
          <p
            className={`row-start-7 row-end-10 
        col-start-2 col-end-7
          justify-self-center self-center
          text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mb-[1.5em]`}
          >
            Managed the construction of all major documents, including user
            manuals, and software-based documents. Interacted with developers on
            a daily basis for design review, testing, bug review, and
            documentation in an agile process with frequently changing
            priorities.
          </p> */}

          <TimelineCard
            hRS={6}
            hRE={6}
            hCS={1}
            hCE={3}
            hW={50}
            cW={80}
            cRS={5}
            cRE={7}
            cCS={2}
            cCE={4}
            cNum={"02"}
            cNumSize={1.5}
            tRS={5}
            tRE={7}
            tCS={3}
            tCE={7}
            tYear={"2023-2024"}
            tTitle={"document lead"}
            dRS={7}
            dRE={10}
            dCS={2}
            dCE={7}
            desc={
              "Managed the construction of all major documents, including usermanuals, and software-based documents. Interacted with developers on a daily basis for design review, testing, bug review, and documentation in an agile process with frequently changing priorities."
            }
          />
        </div>
      </div>
      {/* desktop/bigger screens */}
      <div></div>
    </div>
  );
};

export default Timeline;
