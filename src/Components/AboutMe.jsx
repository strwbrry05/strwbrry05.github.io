import React from "react";
import me1 from "../assets/aboutMe1.png";
import me2 from "../assets/aboutMe2.png";
import me3 from "../assets/aboutMe3.png";
import redPin from "../assets/redPin.png";

const AboutMe = () => {
  return (
    <div
      className="font-(family-name:--font-funtext) pt-[1em] pb-[1em] m-[1.25em]
    flex flex-col justify-center items-center lg:flex-row"
    >
      {/* LEFT SIDE MOBILE (all the text) */}
      <div className="mr-[3em]">
        <div className="flex">
          <h2 className="font-(family-name:--font-titles) text-[3.75rem] lg:text-[4.25rem]">
            about me
          </h2>
          <img className="w-[40px] h-[45px]" src={redPin} alt="" />
        </div>
        <div
          className="font-bold text-[1.07rem] w-[80%] md:w-[500px]
        lg:text-[1.15rem]"
        >
          <p className="mb-[2em] tracking-tight">
            meet your new hire! a curious creative, (with her very own B.S.
            Computer Science) ready to tackle any challenge thrown her way.
          </p>
          <p className="mb-[2em] tracking-tight">
            her love for problem solving stemmed from two main facets: nancy
            drew games and the tv show: criminal minds. forever the creative
            thinker, she is passionate about mixing her interests with
            programming; as well as tackling new tools/technologies and finding
            her place in this industry.
          </p>
          <p className=" tracking-tight">
            based in Los Angeles. she is ready and excited to join your team!
          </p>
        </div>
        <div
          className="flex flex-col items-start mt-[2em]
        font-(family-name:--font-formal)"
        >
          <button
            className="bg-(--color-blue) text-(--color-white) font-semibold
          text-[1.15rem] mb-[1em] w-[125px] h-[40px] rounded-[10px] cursor-pointer
          hover:bg-sky-900 
          active:outline-2 active:outline-(--color-blue) active:outline-offset-2 active:bg-(--color-blue)"
          >
            resume
          </button>
          <button
            className="bg-(--color-red) text-(--color-white) font-semibold
          text-[1.15rem] w-[125px] h-[40px] rounded-[10px] mb-[2em] cursor-pointer
          hover:bg-red-800 
          active:outline-2 active:outline-(--color-red) active:outline-offset-2 active:bg-(--color-red)"
          >
            contact
          </button>
        </div>
      </div>

      {/* RIGHT SIDE MOBILE (images) */}
      <div className="">
        <div className="flex flex-col justify-center items-center mt-[2em] mb-[2em]">
          <img
            className="w-[155px] -rotate-12 mr-[4em]
            lg:w-[175px]"
            src={me1}
            alt="polaroid image of jackie"
          />
          <img
            className="w-[155px] rotate-12 mt-[-3.5em] ml-[6em]
            lg:w-[175px]"
            src={me2}
            alt="polaroid image of jackie"
          />
          <img
            className="w-[155px] -rotate-8 mt-[-3.5em] mr-[4em]
            lg:w-[175px]"
            src={me3}
            alt="polaroid image of jackie"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
