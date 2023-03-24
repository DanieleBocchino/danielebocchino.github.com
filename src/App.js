import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import Experience from "./pages/Experience";
import Certification from "./pages/Certification";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";
import { projects_test } from "./data/DataProjects";

function App() {
  const [projects, setProjects] = useState(projects_test);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));


  useEffect(() => {
    fetch("https://api.github.com/users/DanieleBocchino/repos")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error: " + res.status);
          return;
        }
        return res.json();
      })
      .then((json) => {
        setProjects([...projects, ...json]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Box sx={{ margin: "auto", maxWidth: 1300 }}>
      <Hero isMobile={isMd} />
      <About projects={projects} isMd={isMd} isSm={isSm}/>
      <Education />
      <Certification isSm={isSm}  />
      {/* <Courses /> */}
      <Skills />
      <Experience />
      <Projects projects={projects} isXs={isXs} />
      <Contacts />
      <Footer />
      <Floating />
    </Box>
  );
}

export default App;
