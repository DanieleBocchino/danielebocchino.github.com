import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import useWindowSize from "./hooks/useElementSize";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Certification from "./pages/Certification";
import { Box } from "@mui/material";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";

function App() {
  const [isMobile, setMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setMobile(size.width < 900);
  }, [size]);

  return (
    <Box sx={{ margin: "auto", maxWidth: 1300 }}>
      <Hero isMobile={isMobile} />
      <About />
      <Education />
      <Certification />
      {/* <Courses /> */}
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
{/*       <Contact />
 */}      <Footer />
      <Floating />
    </Box>
  );
}

export default App;
