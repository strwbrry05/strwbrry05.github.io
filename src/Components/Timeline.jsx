import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="md:hidden bg-(--color-red)">
        <h2
          className="text-(--color-white) font-(family-name:--font-titles) 
        text-[2.75rem] px-[0.5em] py-[0.5em] pt-[1em]"
        >
          over the years...
        </h2>
        <div
          className="grid grid-cols-6 grid-rows-10
        font-(family-name:--font-formal)"
        >
          {/* straight vertical line */}
          <p
            className="w-[2px] h-[500px] bg-(--color-white)
            row-start-1 row-end-10 col-start-1 col-end-2 justify-self-center"
          ></p>
          {/* dashed horizontal line */}
          <div
            className=" h-[0.5px] w-[85px] ml-[2em]
          row-start-2 row-end-3 col-start-1 col-end-3
          border-dashed border-t-(--color-white) border-t-[2px]"
          ></div>
          {/* circle */}
          <div
            className="w-[60px] h-[60px] bg-(--color-white) rounded-[100%]
          row-start-1 row-end-3 col-start-3 col-end-5 justify-self-start self-center
          
          flex justify-center items-center"
          >
            <p className="font-(family-name:--font-formal) font-bold text-(--color-red) text-[1.25rem]">
              01
            </p>
          </div>
          {/* titles */}
          <div
            className="text-(--color-white) font-bold
          row-start-1 row-end-3 col-start-4 col-end-7
          
          flex flex-col items-center justify-center
          leading-5 mr-[1em]"
          >
            <h3>2020-2021</h3>
            <h3>intro to sql tutor</h3>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Timeline;
