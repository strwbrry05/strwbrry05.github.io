// import { useState } from "react";

import "./index.css";
import Title from "./Components/Title";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="bg-(--color-white)">
      <div className="pb-[3.5em]">
        <Nav />
      </div>
      <Title />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
