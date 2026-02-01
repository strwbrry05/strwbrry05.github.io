import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div
        className="bg-(--color-blue) text-(--color-white)
    flex flex-col justify-center items-center
    gap-y-[2em] pb-[2em] pt-[5em]
    
    lg:flex-row lg:gap-x-[8em]"
      >
        <div
          className="flex justify-center items-center gap-x-[2em] mb-[1.5em]
        lg:mb-[0em]"
        >
          <a href="https://www.linkedin.com/in/molinajq19/" target="_blank">
            <FaLinkedin className="text-[45px] cursor-pointer" />
          </a>
          <a href="https://github.com/strwbrry05" target="_blank">
            <FaGithub className="text-[45px] cursor-pointer" />
          </a>
          <Link to="contact" smooth={true} offset={-100}>
            <MdEmail className="text-[50px] cursor-pointer" />
          </Link>
        </div>
        <div
          className="font-(family-name:--font-titles) text-[3rem] leading-6
      flex flex-col justify-center items-center mb-[0.5em] 
      
      lg:mb-[0em]"
        >
          <h4>jacqueline</h4>
          <h4>molina</h4>
        </div>
        <p
          className="text-(--color-gray) font-(family-name:--font-formal) font-semibold 
      lg:hidden"
        >
          &copy; Jacqueline Molina | 2026
        </p>
        <div
          className="hidden lg:flex gap-x-[25px] 
      text-(--color-gray) font-(family-name:--font-formal) font-semibold"
        >
          <div className="">
            {/* LINK TO APPR PLACES ON PAGE!! */}
            <ul className="flex flex-col gap-y-[5px]">
              <li>Home</li>
              <li>Projects</li>
              <li>Designs</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-y-[5px]">
              <li>AboutMe</li>
              <li>TimeLine</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center bg-(--color-blue) pb-[2em]">
        <p className="text-(--color-gray) font-(family-name:--font-formal) font-semibold">
          &copy; Jacqueline Molina | 2026
        </p>
      </div>
    </>
  );
};

export default Footer;
