import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    h6: {
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
    },
    body2: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.6rem',
      },
    },
    caption: {
      fontSize: '0.875rem',
      '@media (max-width:600px)': {
        fontSize: '0.5rem',
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

