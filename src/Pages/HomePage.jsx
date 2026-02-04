import React from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Timeline from "../Components/Timeline";
import Contact from "../Components/Contact";
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Skills />
      <Element name="timeline">
        <Timeline />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default HomePage;
