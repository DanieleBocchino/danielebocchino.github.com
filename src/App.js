import "./App.css";
import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import { Box } from "@mui/material";
import useOnScreen from "./hooks/useOnScreen";

function App() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useOnScreen(ref);
  

  return (
    <Box ref={ref}>
      <Hero />
      <About />
      <Education />
      <Certification />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Floating />
    </Box>
  );
}

export default App;
