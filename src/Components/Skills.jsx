import React from "react";
import js from "../../public/bookJs.png";
import node from "../assets/bookNode.png";
import css from "../assets/bookCss.png";
import html from "../assets/bookHtml.png";
import figma from "../assets/bookFigma.png";
import react from "../assets/bookReact.png";
// import sql from "../assets/bookSql.png";
import tailwind from "../assets/bookTailwind.png";
import git from "../assets/bookGit.png";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Skills & Technologies</h2>
      <div className="flex flex-wrap w-[200px] bg-blue-200 justify-center items-center">
        <img className="w-[100px] h-[130px]" src={js} alt="javascript skill" />
        <img className="w-[100px] h-[120px]" src={node} alt=" nodeJS skill" />
        <img className="w-[100px] h-[130px]" src={css} alt="css skill" />
        <img className="w-[100px] h-[130px]" src={html} alt="html skill" />
        <img className="w-[100px] h-[130px]" src={react} alt="react skill" />
        <img className="w-[100px] h-[130px]" src={git} alt="git skill" />
        <img
          className="w-[100px] h-[130px]"
          src={tailwind}
          alt="tailwind skill"
        />
        <img className="w-[100px] h-[130px]" src={css} alt="css skill" />
        <img className="w-[100px] h-[130px]" src={figma} alt="figma skill" />
      </div>
    </div>
  );
};

export default Skills;
