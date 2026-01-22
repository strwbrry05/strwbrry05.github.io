import React from "react";

const HeroCard = (props) => {
  return (
    <div
      className={`font-(family-name:--font-text) text-(--color-gray)
    ${props.isReverse ? "flex-row-reverse" : ""} flex w-[325px] cursor-pointer hover:text-black`}
    >
      <div
        className={` ${props.isTitleReverse ? "flex-col-reverse" : "flex-col"} flex  justify-center items-center w-[30%]`}
      >
        <p className="text-[1.15rem] text-center mb-[0.5em]">{props.title}</p>
        <img className={`w-[${props.w}px]`} src={props.icon} alt={props.alt} />
      </div>
      <div className="w-[65%]">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default HeroCard;
