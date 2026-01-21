import React from "react";
import TimelineCard from "./TimelineCard";

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
      {/* mobile/tablet view */}
      <div className="md:hidden flex justify-center items-center">
        {/* grid */}
        <div
          className="grid grid-cols-6 grid-rows-25 w-[375px]
        font-(family-name:--font-formal)"
        >
          {/* straight vertical line */}
          <p
            className="w-[2px] h-[1500px] bg-(--color-white)
            row-start-1 row-end-26 col-start-1 col-end-2 justify-self-center"
          ></p>
          {/* 01 */}
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
          {/* 02 */}
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
          {/* 03 */}
          <TimelineCard
            hRS={11}
            hRE={11}
            hCS={1}
            hCE={3}
            hW={80}
            cW={60}
            cRS={10}
            cRE={12}
            cCS={3}
            cCE={5}
            cNum={"03"}
            cNumSize={1.25}
            tRS={10}
            tRE={12}
            tCS={4}
            tCE={7}
            tYear={"2023-2024"}
            tTitle={timeline03Content}
            dRS={12}
            dRE={15}
            dCS={2}
            dCE={7}
            desc={
              "Composed engaging lesson reviews, allowing students to further their understanding of complex material, boosting motivation and lesson preparation for over 90 students. Expanded resource availability, including YouTube tutorials, handouts, practice exams, and projects."
            }
          />
          {/* 04 */}

          <TimelineCard
            hRS={16}
            hRE={16}
            hCS={1}
            hCE={2}
            hW={50}
            cW={90}
            cRS={15}
            cRE={17}
            cCS={2}
            cCE={4}
            cNum={"04"}
            cNumSize={1.75}
            tRS={15}
            tRE={17}
            tCS={4}
            tCE={7}
            tYear={"2025-2026"}
            tTitle={"freelance web desginer/developer"}
            dRS={17}
            dRE={20}
            dCS={2}
            dCE={7}
            desc={
              "Mastered web technologies and frameworks, allowing for the expansion of services offered to future clients. Delivered user friendly, responsive, and visually stunning websites that increase client engagement and satisfaction."
            }
          />

          <TimelineCard
            hRS={21}
            hRE={21}
            hCS={1}
            hCE={3}
            hW={85}
            cW={75}
            cRS={20}
            cRE={22}
            cCS={3}
            cCE={5}
            cNum={"05"}
            cNumSize={1.5}
            tRS={20}
            tRE={22}
            tCS={4}
            tCE={7}
            tYear={"2026-present"}
            tTitle={""}
            dRS={22}
            dRE={25}
            dCS={2}
            dCE={7}
            desc={
              "Seeking opportunities to gain practical experience in a technology-related position. Excellent analytical and problem-solving abilities, with a passion for continuous lifelong learning. Practical experience with the software development life cycle and agile practices. Eager to contribute to team success."
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
