// import { useState } from "react";

import "./index.css";
import Title from "./Components/Title";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";

function App() {
  return (
    <div className="bg-(--color-white)">
      <Title />
      <AboutMe />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;
