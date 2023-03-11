import { Avatar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { mainSkills, skills } from "../data/DataSkills";
import CustomSVG from "../functions/CustomSVG";
import { Section, Title } from "../styles/custom_styles";

function NewSkills() {
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
          {mainSkills.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
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
      {item.svg}
    </Box>
  );
}

export default NewSkills;
