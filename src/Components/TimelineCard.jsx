import React from "react";

const TimelineCard = (props) => {
  return (
    <>
      {/* dashed horizontal line */}
      <div
        className={`h-[0.5px] w-[${props.hW}px] ml-[2em]
          row-start-${props.hRS} row-end-${props.hRE} col-start-${props.hCS} col-end-${props.hCE}
          border-dashed border-t-(--color-white) border-t-[2px]`}
      ></div>
      {/* circle */}
      <div
        className={`w-[${props.cW}px] h-[${props.cW}px] bg-(--color-white) rounded-[100%]
          row-start-${props.cRS} row-end-${props.cRE} col-start-${props.cCS} col-end-${props.cCE} 
          justify-self-start self-center
          
          flex justify-center items-center`}
      >
        <p
          className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[${props.cNumSize}rem]`}
        >
          {props.cNum}
        </p>
      </div>
      {/* titles */}
      <div
        className={`text-(--color-white) font-bold
          row-start-${props.tRS} row-end-${props.tRE} 
          col-start-${props.tCS} col-end-${props.tCE}
          
          flex flex-col items-center justify-center
          leading-5 mr-[1em]`}
      >
        <h3>{props.tYear}</h3>
        <h3>{props.tTitle}</h3>
      </div>
      {/* text */}
      <p
        className={`row-start-${props.dRS} row-end-${props.dRE} 
        col-start-${props.dCS} col-end-${props.dCE}
          justify-self-center self-center
          text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mb-[1.5em]`}
      >
        {props.desc}
      </p>
    </>
  );
};

export default TimelineCard;
