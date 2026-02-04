import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../assets/files/MolinaJacqueline.pdf";
import { Link } from "react-scroll";

const Nav = () => {
  const [isRotated, setIsRotated] = useState(false);

  const hitbox = useRef(null);

  const handleClick = () => {
    console.log(isRotated);
    setIsRotated(!isRotated);
  };

  // if clicked outside of the dropdown menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (hitbox.current && !hitbox.current.contains(e.target)) {
        console.log("hit outside!");
        setIsRotated(false);
      }
    };
    // bind event listener
    document.addEventListener("mousedown", handleClickOutside);

    // unbind on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hitbox, isRotated]);

  return (
    <>
      {/* mobile */}
      <div
        ref={hitbox}
        className="block md:hidden fixed top-0 right-0 left-0 z-15 shadow-lg 
      bg-(--color-blue) h-[60px] font-(family-name:--font-formal) text-(--color-white) "
      >
        {/* unmutable menu */}
        <div
          ref={hitbox}
          className="sticky top-0 z-10 flex justify-center items-center h-[60px] shadow-lg
        gap-x-[30px] z-15 bg-(--color-blue)"
        >
          <GiHamburgerMenu
            className={isRotated ? "nav-rotated" : "nav-not-rotated"}
            onClick={handleClick}
          />
          <a href={resume} download target="_blank">
            <button
              className="mr-[2em] border-[2px] rounded-[10px] border-(--color-yellow) px-[0.75em] py-[0.15em] cursor-pointer
                active:bg-sky-900 font-semibold bg-(--color-blue)"
            >
              resume
            </button>
          </a>
        </div>
        {/* drop down */}
        <div
          ref={hitbox}
          className={`md:hidden absolute w-full z-2  ${
            isRotated
              ? "translate-y-[0vh] transform transition-all duration-500 ease-in-out"
              : "translate-y-[-100vh] transform transition-all duration-500 ease-in-out"
          }`}
        >
          <ul
            className="z-3 flex flex-col justify-center items-center gap-y-[25px] 
          bg-(--color-blue) py-[2.25em]"
          >
            <Link
              to="hero"
              activeClass="activeSmall"
              smooth={true}
              offset={-150}
              spy={true}
              className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>home</li>
            </Link>
            <Link
              to="projects"
              activeClass="activeSmall"
              offset={-70}
              smooth={true}
              spy={true}
              className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>projects</li>
            </Link>
            {/* <li>designs</li> */}
            <Link
              to="about"
              activeClass="activeSmall"
              smooth={true}
              offset={-90}
              spy={true}
              className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>aboutMe</li>
            </Link>
            <Link
              to="timeline"
              activeClass="activeSmall"
              smooth={true}
              offset={-80}
              spy={true}
              className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>timeline</li>
            </Link>
            <Link
              to="contact"
              activeClass="activeSmall"
              smooth={true}
              offset={-120}
              spy={true}
              className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>contact</li>
            </Link>
          </ul>
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
              <Link
                to="hero"
                activeClass="activeSmall"
                smooth={true}
                offset={-200}
                spy={true}
                className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                <li>home</li>
              </Link>
              <Link
                to="projects"
                activeClass="activeSmall"
                smooth={true}
                offset={-50}
                spy={true}
                className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                <li>projects</li>
              </Link>
              {/* <li>designs</li> */}
              <Link
                to="about"
                activeClass="activeSmall"
                smooth={true}
                offset={-70}
                spy={true}
                className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                <li>aboutMe</li>
              </Link>
              <Link
                to="timeline"
                activeClass="activeSmall"
                smooth={true}
                offset={-70}
                spy={true}
                className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                <li>timeline</li>
              </Link>
              <Link
                to="contact"
                activeClass="activeSmall"
                smooth={true}
                offset={-100}
                spy={true}
                className="font-semibold text-(--color-gray) cursor-pointer
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0
                
                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                <li>contact</li>
              </Link>
            </ul>
            <a href={resume} download target="_blank">
              <button
                className="mr-[2em] border-[2px] rounded-[10px] border-(--color-yellow) px-[0.75em] py-[0.15em] cursor-pointer
                active:bg-sky-900 font-semibold"
              >
                resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
