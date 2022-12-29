import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import useWindowSize from "./hooks/useElementSize";
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

function App() {
  const [isMobile, setMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setMobile(size.width < 900);
  }, [size]);

  return (
    <Box>
      <Hero isMobile={isMobile} />
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
