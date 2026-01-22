import React from "react";

const HeroCard = (props) => {
  return (
    <div
      className={`font-(family-name:--font-text) text-(--color-gray)
    ${props.isReverse ? "flex-row-reverse" : ""} flex`}
    >
      <div
        className={` ${props.isTitleReverse ? "flex-col-reverse" : "flex-col"} flex  justify-center items-center w-[30%]`}
      >
        <p className="text-[1.15rem]">hobonichi</p>
        <img className={`w-[${props.w}px]`} src={props.icon} alt={props.alt} />
      </div>
      <div className="w-[60%]">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default HeroCard;
