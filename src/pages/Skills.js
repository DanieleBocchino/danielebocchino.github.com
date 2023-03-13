import {
  Avatar,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { skills } from "../data/DataSkills";
import {
  DEFAULT_SKILL_COLOR,
  DEFAULT_SKILL_TRANSPARENT,
} from "../functions/ColorFunction";
import { Section, Title } from "../styles/custom_styles";

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
    <Box id="Skills" sx={{ mt: 5, mb: 5 }} ref={ref}>
      <Section dark>
        <Title dark>Skills</Title>
        <Grid container columns={{ xs: 2, sm: 8, lg: 12, xl: 16 }}>
          {skills.map((item, index) => (
            <Grid item xs={1} sm={4} key={index}>
              <SkillsBadge
                item={item}
                index={index}
                time={skills.length + index * 500}
                animation={isVisible}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function SkillsBadge({ item, index, time, animation }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <Box
      sx={{
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <CustomSVG
        Component={item.svg}
        options={item.options}
        skill={item.skill}
        width={isXs ? 50 : isSm ? 75 : 100}
        height={isXs ? 50 : isSm ? 75 : 100}
        show_text={isXs || isSm}
        text={item.text}
      />
    </Box>
  );
}

export default Skills;

function CustomSVG({
  width = 100,
  height = 100,
  Component,
  options = {
    fill: false,
    stroke: false,
    text: false,
    color: DEFAULT_SKILL_COLOR,
  },
  skill = "",
  text = "",
  show_text = false,
}) {
  const [colors, setColors] = useState({
    strokeColor: options.stroke
      ? null
      : show_text
      ? options.color
      : DEFAULT_SKILL_COLOR,
    fillColor: options.fill
      ? null
      : show_text
      ? options.color
      : DEFAULT_SKILL_COLOR,
    textColor: options.text
      ? null
      : show_text
      ? DEFAULT_SKILL_COLOR
      : DEFAULT_SKILL_TRANSPARENT,
  });

  const handleMouseEnter = () => {
    setColors({
      strokeColor: options.stroke ? null : options.color,
      fillColor: options.fill ? null : options.color,
      textColor: options.text ? null : options.color,
    });
  };

  const handleMouseLeave = () => {
    setColors({
      strokeColor: options.stroke ? null : DEFAULT_SKILL_COLOR,
      fillColor: options.fill ? null : DEFAULT_SKILL_COLOR,
      textColor: options.text ? null : DEFAULT_SKILL_TRANSPARENT,
    });
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {show_text ? null : (
        <Typography
          style={{
            color: colors.textColor,
            transition: "all 0.3s ease-in-out",
            padding: "1rem",
            fontSize: "20px",
            fontWeight: 700,
          }}
          children={skill}
        />
      )}
      <Component
        style={{
          fill: colors.fillColor,
          stroke: colors.strokeColor,
          transition: "all 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />
      {show_text ? (
        <Typography
          style={{
            color: colors.textColor,
            transition: "all 0.3s ease-in-out",
            padding: "1rem",
            fontSize: "18px",
            fontWeight: 700,
          }}
          children={skill}
        />
      ) : (
        <Typography
          style={{
            color: colors.textColor,
            transition: "all 0.3s ease-in-out",
            height: 200,
          }}
          children={text}
        />
      )}
    </div>
  );
}
