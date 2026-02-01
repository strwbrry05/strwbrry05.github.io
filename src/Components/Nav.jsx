import React from "react";

const Nav = () => {
  return (
    <>
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
              <li className="font-semibold text-(--color-white) cursor-pointer">
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
