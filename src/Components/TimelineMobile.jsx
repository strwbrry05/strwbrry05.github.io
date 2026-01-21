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
        <div className="w-[2px] h-[1180px] bg-(--color-white)"></div>
      </div>
      {/* obj */}
      <div className="w-[90%]">
        {/* 01 */}
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
        {/* 02 */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center  ">
            <div
              className={`h-[0.5px] w-[50px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
            ></div>
            <div
              className={`w-[80px] h-[80px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
            >
              <p
                className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.5rem]`}
              >
                02
              </p>
            </div>
            <div
              className={`text-(--color-white) font-bold leading-5 ml-[1em]`}
            >
              <h3>2023-2024</h3>
              <h3>document lead</h3>
            </div>
          </div>
          <p
            className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
          >
            Managed the construction of all major documents, including
            usermanuals, and software-based documents. Interacted with
            developers on a daily basis for design review, testing, bug review,
            and documentation in an agile process with frequently changing
            priorities.
          </p>
        </div>

        {/* 03 */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center  ">
            <div
              className={`h-[0.5px] w-[80px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
            ></div>
            <div
              className={`w-[60px] h-[60px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
            >
              <p
                className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.25rem]`}
              >
                03
              </p>
            </div>
            <div
              className={`text-(--color-white) font-bold leading-5 ml-[1em]`}
            >
              <h3>2023-2024</h3>
              <h3>timeline03Content</h3>
            </div>
          </div>
          <p
            className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
          >
            Composed engaging lesson reviews, allowing students to further their
            understanding of complex material, boosting motivation and lesson
            preparation for over 90 students. Expanded resource availability,
            including YouTube tutorials, handouts, practice exams, and projects.
          </p>
        </div>

        {/* 04 */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center  ">
            <div
              className={`h-[0.5px] w-[50px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
            ></div>
            <div
              className={`w-[75px] h-[75px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
            >
              <p
                className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.5rem]`}
              >
                04
              </p>
            </div>
            <div
              className={`text-(--color-white) font-bold leading-5 ml-[1em]`}
            >
              <h3>2025-2026</h3>
              <h3>freelance web designer/developer</h3>
            </div>
          </div>
          <p
            className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
          >
            Mastered web technologies and frameworks, allowing for the expansion
            of services offered to future clients. Delivered user friendly,
            responsive, and visually stunning websites that increase client
            engagement and satisfaction.
          </p>
        </div>

        {/* 05 */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center  ">
            <div
              className={`h-[0.5px] w-[70px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
            ></div>
            <div
              className={`w-[60px] h-[60px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
            >
              <p
                className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.25rem]`}
              >
                05
              </p>
            </div>
            <div
              className={`text-(--color-white) font-bold leading-5 ml-[1em]`}
            >
              <h3>2026-present</h3>
              <h3></h3>
            </div>
          </div>
          <p
            className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
          >
            Seeking opportunities to gain practical experience in a
            technology-related position. Excellent analytical and
            problem-solving abilities, with a passion for continuous lifelong
            learning. Practical experience with the software development life
            cycle and agile practices. Eager to contribute to team success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineMobile;
