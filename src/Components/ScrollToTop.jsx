import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";

const ScrollToTop = () => {
  return (
    <div
      className="z-99 sticky p-[0.75em]  bg-(--color-gray)
    flex justify-center items-center w-50px"
    >
      <BiSolidUpArrow className="text-[2rem] text-(--color-white)" />
    </div>
  );
};

export default ScrollToTop;
