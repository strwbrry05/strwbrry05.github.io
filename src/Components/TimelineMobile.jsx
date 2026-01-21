import React from "react";
import TimeLineCardMobile from "./TimeLineCardMobile";

const TimelineMobile = () => {
  const timeline03Content = (
    <span>
      data structures <br /> peer instructor
    </span>
  );
  return (
    <div className="flex justify-center">
      {/* vert line */}
      <div className="w-[10%] flex justify-center items-center">
        <div className="w-[2px] h-[1250px] bg-(--color-white)"></div>
      </div>
      {/* obj */}
      <div className="w-[90%]">
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center  ">
            <div
              className={`h-[0.5px] w-[75px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
            ></div>
            <div
              className={`w-[60px] h-[60px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
            >
              <p
                className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.25rem]`}
              >
                01
              </p>
            </div>
            <div
              className={`text-(--color-white) font-bold leading-5 ml-[1em]`}
            >
              <h3>2020-2021</h3>
              <h3>intro to sql tutor</h3>
            </div>
          </div>
          <p
            className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
          >
            Operated one-on-one and small group instruction for 20+ students,
            indeveloping SQL comprehension and relational database skills.
            Assisted students with complex coursework, including helping them
            develop better study habits.
          </p>
        </div>
        {/* 01 */}
        <TimeLineCardMobile
          vW={85}
          cW={60}
          cText={1.25}
          cNum={"01"}
          tYear={"2020-2021"}
          tTitle={"intro to sql tutor"}
          desc={
            "Operated one-on-one and small group instruction for 20+ students, indeveloping SQL comprehension and relational database skills. Assisted students with complex coursework, including helping them develop better study habits."
          }
        />
        {/* 02 */}
        <TimeLineCardMobile
          vW={50}
          cW={80}
          cText={1.5}
          cNum={"02"}
          tYear={"2023-2024"}
          tTitle={"document lead"}
          desc={
            "Managed the construction of all major documents, including usermanuals, and software-based documents. Interacted with developers on a daily basis for design review, testing, bug review, and documentation in an agile process with frequently changing priorities."
          }
        />
        {/* 03 */}
        <TimeLineCardMobile
          vW={80}
          cW={60}
          cText={1.25}
          cNum={"03"}
          tYear={"2023-2024"}
          tTitle={timeline03Content}
          desc={
            "Composed engaging lesson reviews, allowing students to further their understanding of complex material, boosting motivation and lesson preparation for over 90 students. Expanded resource availability, including YouTube tutorials, handouts, practice exams, and projects."
          }
        />
        {/* 04 */}
        <TimeLineCardMobile
          vW={50}
          cW={75}
          cText={1.5}
          cNum={"04"}
          tYear={"2025-2026"}
          tTitle={"freelance web desginer/developer"}
          desc={
            "Mastered web technologies and frameworks, allowing for the expansion of services offered to future clients. Delivered user friendly, responsive, and visually stunning websites that increase client engagement and satisfaction."
          }
        />
        {/* 05 */}
        <TimeLineCardMobile
          vW={85}
          cW={75}
          cText={1.75}
          cNum={"05"}
          tYear={"2026-present"}
          tTitle={""}
          desc={
            "Seeking opportunities to gain practical experience in a technology-related position. Excellent analytical and problem-solving abilities, with a passion for continuous lifelong learning. Practical experience with the software development life cycle and agile practices. Eager to contribute to team success."
          }
        />
      </div>
    </div>
  );
};

export default TimelineMobile;
