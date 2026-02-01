import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import { Link, Element } from "react-scroll";
import ScrollToTop from "../Components/ScrollToTop";

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-(--color-white)">
      <div className="pb-[3.5em]">
        <Nav />
      </div>
      <Element name="title">
        <Title />
      </Element>
      <Outlet />
      <Link
        to="title"
        smooth={true}
        offset={-70}
        className={`fixed bottom-10 right-0 cursor-pointer ${
          isVisible ? "block" : "hidden"
        } `}
      >
        <div>
          <ScrollToTop />
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default MainLayout;
