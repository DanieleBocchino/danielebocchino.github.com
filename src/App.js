import "./App.css";
import React from "react";
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
  return (
    <Box>
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
