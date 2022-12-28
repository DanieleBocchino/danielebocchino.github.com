import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

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

function App() {
  const [isMobile, setMobile] = useState(false);
  const size = useWindowSize();
  const drawerWidth = 300;

  useEffect(() => {
    setMobile(size.width < 900);
  }, [size]);

  return (
    <>

      <Hero isMobile={isMobile} drawerWidth={drawerWidth} />
      <About isMobile={isMobile} drawerWidth={drawerWidth} />
      <Education isMobile={isMobile} drawerWidth={drawerWidth} />

      <Certification isMobile={isMobile} drawerWidth={drawerWidth} />

      <Experience isMobile={isMobile} drawerWidth={drawerWidth} /> 

      <Skills isMobile={isMobile} drawerWidth={drawerWidth} />

       <Projects isMobile={isMobile} drawerWidth={drawerWidth} />
      <Contact isMobile={isMobile} drawerWidth={drawerWidth} /> 
      <Footer isMobile={isMobile} drawerWidth={drawerWidth} />
      <Floating />
    </>
  );
}

export default App;
