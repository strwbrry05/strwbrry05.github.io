import React from "react";
import assets from "./Assets";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center mpt-[1em] pb-[2em]">
      <h2
        className="font-(family-name:--font-titles) text-[2.25rem]
      md:text-[3.05rem]"
      >
        Skills & Technologies
      </h2>
      <div
        className="flex flex-wrap w-[300px] justify-center items-center
        gap-x-[30px] pt-[1em] pb-[1em] gap-y-[30px]
        
        md:w-[500px] lg:w-[700px]"
      >
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.js}
          alt="javascript skill"
        />
        <img
          className="w-[100px] h-[120px] md:w-[110px] md:h-[140px]"
          src={assets.node}
          alt=" nodeJS skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.css}
          alt="css skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.html}
          alt="html skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.react}
          alt="react skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.git}
          alt="git skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.tailwind}
          alt="tailwind skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.sql}
          alt="css skill"
        />
        <img
          className="w-[100px] h-[130px] md:w-[110px] md:h-[140px]"
          src={assets.figma}
          alt="figma skill"
        />
      </div>
      <div>
        <p
          className="font-(family-name:--font-funtext) font-bold w-[60%] justify-self-center text-[1.05rem]
        mt-[1em]"
        >
          *could refamiliarize myself (if needed): java, python, mongodb, c#
        </p>
      </div>
    </div>
  );
};

export default Skills;
