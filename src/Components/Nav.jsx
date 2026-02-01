import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <>
      {/* mobile */}
      <div
        className="block md:hidden fixed top-0 right-0 left-0 z-2 shadow-lg
      bg-(--color-blue) h-[60px] font-(family-name:--font-formal) text-(--color-white) "
      >
        <div
          className="flex justify-center items-center h-[60px]
        gap-x-[30px]"
        >
          <GiHamburgerMenu className="text-[1.5rem] cursor-pointer" />
          <button
            className="mr-[2em] border-[2px] rounded-[10px] border-(--color-yellow) px-[0.75em] py-[0.15em] cursor-pointer
                active:bg-sky-900 font-semibold"
          >
            resume
          </button>
        </div>
      </div>

      {/* tablet and larger screens */}
      <div
        className="hidden md:block fixed top-0 right-0 left-0 z-2 shadow-xl
         flex justify-center items-center bg-(--color-blue) h-[60px] font-(family-name:--font-formal)
      text-(--color-white) "
      >
        <div className="flex justify-center items-center">
          <div
            className="flex justify-between items-center h-[60px] 
        md:w-[700px] lg:w-[900px] text-[1rem]"
          >
            <ul className="flex gap-x-[50px] ml-[2em]">
              <li
                className="font-semibold text-(--color-white) cursor-pointer
                block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                home
              </li>
              <li className="font-semibold text-(--color-gray) cursor-pointer">
                projects
              </li>
              {/* <li>designs</li> */}
              <li className="font-semibold text-(--color-gray) cursor-pointer">
                aboutMe
              </li>
              <li className="font-semibold text-(--color-gray) cursor-pointer">
                contact
              </li>
            </ul>
            <button
              className="mr-[2em] border-[2px] rounded-[10px] border-(--color-yellow) px-[0.75em] py-[0.15em] cursor-pointer
                active:bg-sky-900 font-semibold"
            >
              resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
