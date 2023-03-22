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
import { projects_test } from "./data/DataProjects";
import LinesOfCode from "./components/CountLines";

function App() {
  const [projects, setProjects] = useState(projects_test);
  const [isMobile, setMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setMobile(size.width < 900);
  }, [size]);

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
        json.map((item) => {
          fetch(item.languages_url)
            .then((res1) => {
              if (res1.status !== 200) {
                console.log("Error: " + res1.status);
                return;
              }
              return res1.json();
            })
            .then((json1) => {
              item.languages = Object.keys(json1);

              const prj = projects.find((item2) => item2.id === item.id);

              if (prj !== undefined) {
                item.languages = prj.languages.concat(item.languages)
              }
              setProjects([...json]);

              // qui aggiungo i linguaggi mergiando tra quelli ottenuti da git e quelli che ho inserito a mano
            });
        });

       /*  const mergedList = json.map((item1) => {
          const item2 = projects.find((item2) => item2.id === item1.id);
          return { ...item1, ...item2 };
        });

        setProjects([...mergedList]); */
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ margin: "auto", maxWidth: 1300 }}>
      <LinesOfCode />
      <Hero isMobile={isMobile} />
      <About projects={projects} />
      <Education />
      <Certification />
      {/* <Courses /> */}
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <Contacts />
      {/*       <Contact />
       */}{" "}
      <Footer />
      <Floating />
    </Box>
  );
}

export default App;
