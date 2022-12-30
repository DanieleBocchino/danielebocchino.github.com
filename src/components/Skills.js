import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect, useRef } from "react";
import {
  Avatar,
  LinearProgress,
  linearProgressClasses,
  Typography,
  Zoom,
} from "@mui/material";
import { SelectColor } from "../functions/ColorFunction";
import { Section, Title } from "../styles/custom_styles";
import { softSkills,hardSkills } from "../data/DataSkills";

function Skills() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = () => {
    if (window.scrollY + window.innerHeight >= ref.current.offsetTop)
      setIsVisible(true);
  };
  useEffect(() => {
    setVisible();
  }, []);

  useEffect(() => {
    if (!isVisible) window.addEventListener("scroll", setVisible);
  }, []);

  return (
    <Box id="Skills" sx={{ mt:5, mb:5}} ref={ref}>
      <Section dark >
        <Title dark>Skills</Title>
        <Typography align="center" variant="h5">Hard Skills</Typography>

        <Grid container spacing={0} columns={{ xs: 1, sm: 1, md: 2 }}>
          <Zoom
            in={isVisible}
            timeout={1000} 
            mountOnEnter
            unmountOnExit
          >
            <Grid item xs={1}>
              {hardSkills.slice(0, hardSkills.length / 2).map((item, index) => (
                <ProgressBar item={item} key={index} index={index} />
              ))}
            </Grid>
          </Zoom>
          <Zoom
            in={isVisible}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Grid item xs={1}>
              {hardSkills
                .slice(hardSkills.length / 2, hardSkills.length)
                .map((item, index) => (
                  <ProgressBar item={item} key={index} index={index} />
                ))}
            </Grid>
          </Zoom>
        </Grid>

        <Typography align="center" variant="h5">Soft Skills</Typography>

        <Grid container spacing={0} columns={{ xs: 1, sm: 1, md: 2 }}>
          <Zoom
            in={isVisible}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Grid item xs={1}>
              {softSkills.slice(0, softSkills.length / 2).map((item, index) => (
                <ProgressBar item={item} key={index} index={index}  randomColor/>
              ))}
            </Grid>
          </Zoom>
          <Zoom
            in={isVisible}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Grid item xs={1}>
              {softSkills
                .slice(softSkills.length / 2, softSkills.length)
                .map((item, index) => (
                  <ProgressBar item={item} key={index} index={index}  randomColor/>
                ))}
            </Grid>
          </Zoom>
        </Grid>
      </Section>
    </Box>
  );
}

function ProgressBar({ item, index, isVisible, randomColor }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: randomColor ? SelectColor(index) : SelectColor(3),
    },
  }));

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => Math.min(oldProgress + 10, item.value));
    }, 100 * ((index % 4) + 1));

    return () => clearInterval(timer);
  }, [index, item]);

  return (
    <Box sx={{ width: {xs:"90%",sm:'80%' }, m: "auto", my: 2 }}>
      <Box
        sx={{
          display: "flex",
          textAlign: "start",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{ display: "inline-block" }}
          variant="legend"
          color="text.secondary"
          position={"relative"}
          marginLeft={0}
        >
          <Avatar
            style={{ display: "inline-block" }}
            variant="square"
            src={item.icon}
            sx={{
              width: 30,
              height: 30,
              mr: 1,
            }}
          />
          {item.skill}
        </Typography>

        <Typography
          style={{ display: "inline-block" }}
          variant="legend"
          color="text.secondary"
        >
          {Math.round(progress) / 10}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <BorderLinearProgress
            height={10}
            variant="determinate"
            value={progress}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
