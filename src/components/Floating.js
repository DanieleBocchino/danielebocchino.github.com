import { Fab, Zoom } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";
import { RandomColor } from "../functions/ColorFunction";



function Floating() {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setState(window.pageYOffset > 200));
  }, []);

 

  return (
    <Link to="Hero" spy={true} smooth={true}>
      <Zoom in={state}  unmountOnExit mountOnEnter>
        <Fab
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            color: "orange",
            background: 'transparent',
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </Zoom>
    </Link>
  );
}

export default Floating;
