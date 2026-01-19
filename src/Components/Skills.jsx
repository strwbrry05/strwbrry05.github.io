import React from "react";
import assets from "./Assets";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Skills & Technologies</h2>
      <div className="flex flex-wrap w-[200px] bg-blue-200 justify-center items-center">
        <img
          className="w-[100px] h-[130px]"
          src={assets.js}
          alt="javascript skill"
        />
        <img
          className="w-[100px] h-[120px]"
          src={assets.node}
          alt=" nodeJS skill"
        />
        <img className="w-[100px] h-[130px]" src={assets.css} alt="css skill" />
        <img
          className="w-[100px] h-[130px]"
          src={assets.html}
          alt="html skill"
        />
        <img
          className="w-[100px] h-[130px]"
          src={assets.react}
          alt="react skill"
        />
        <img className="w-[100px] h-[130px]" src={assets.git} alt="git skill" />
        <img
          className="w-[100px] h-[130px]"
          src={assets.tailwind}
          alt="tailwind skill"
        />
        <img className="w-[100px] h-[130px]" src={assets.sql} alt="css skill" />
        <img
          className="w-[100px] h-[130px]"
          src={assets.figma}
          alt="figma skill"
        />
      </div>
    </div>
  );
};

export default Skills;
