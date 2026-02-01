import "./index.css";
// import Title from "./Components/Title";
// import AboutMe from "./Components/AboutMe";
// import Skills from "./Components/Skills";
// import Timeline from "./Components/Timeline";
// import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";
// import Hero from "./Components/Hero";
// import Projects from "./Components/Projects";
// import Nav from "./Components/Nav";

import MainLayout from "./Layouts/MainLayout";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
