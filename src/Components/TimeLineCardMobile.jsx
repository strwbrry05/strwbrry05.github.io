import React from "react";

const TimeLineCardMobile = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center ">
          <div
            className={`h-[0.5px] w-[${props.vW}px] ml-[-.75em] border-dashed border-t-(--color-white) border-t-[2px]`}
          ></div>
          <div
            className={`w-[${props.cW}px] h-[${props.cW}px] bg-(--color-white) rounded-[100%]
          flex justify-center items-center`}
          >
            <p
              className={`font-(family-name:--font-formal) font-bold text-(--color-red) text-[${props.cText}rem]`}
            >
              {props.cNum}
            </p>
          </div>
          <div className={`text-(--color-white) font-bold leading-5 ml-[1em]`}>
            <h3>{props.tYear}</h3>
            <h3>{props.tTitle}</h3>
          </div>
        </div>
        <p
          className={`text-[1rem] font-(family-name:--font-funtext) text-(--color-white) leading-5 mt-[.75em] mb-[1.5em]`}
        >
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default TimeLineCardMobile;
