import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { project, tabs } from "../data/DataProjects";
import { Item, Section, Title } from "../styles/custom_styles";
import { FaGithub, FaLink } from "react-icons/fa";
import { Stack } from "@mui/system";

function Projects() {
  const ref = useRef(null);
  const [projects, setProjects] = useState(project);
  const [value, setValue] = React.useState(0);

  const filter = (newValue) => {
    if (newValue === 0) {
      return project;
    } else {
      var res = [];
      project.forEach((e) => {
        if (e.keywords.includes(tabs[newValue].label.toLowerCase()))
          res.push(e);
      });
      return res;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setProjects(filter(newValue));
  };

  return (
    <Box id="Projects" sx={{ mt: 5, mb: 5 }} ref={ref}>
      <Section dark>
        <Title dark>Projects</Title>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
          variant="scrollable"
          TabIndicatorProps={{
            style: {
              backgroundColor: tabs[value].color,
              color: tabs[value].color,
            },
          }}
        >
          {tabs.map((item, index) => (
            <Tab
              key={index}
              icon={item.icon}
              label={item.label}
              style={{
                color: value == item.position ? item.color : null,
              }}
            />
          ))}
        </Tabs>
        <Divider />
        {projects.map((item, index) => (
          <Grid item xs={2} sm={4} key={index}>
            <Item>
              <Card item={item} />
              <Divider />
            </Item>
          </Grid>
        ))}
      </Section>
    </Box>
  );
}

export default Projects;

function Card({ item }) {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        textAlign: "start",
        paddingY: 2,
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        children={item.title}
      />
      <Typography
        gutterBottom
        variant="body2"
        component="div"
        children={item.description}
      />
      <Box sx={{my:2}}>
      {item.badges.map((elem, index) => (
        <span style={{ padding: 2 }}>{elem}</span>
      ))}
      </Box>
      <Stack spacing={2} direction="row" sx={{my:2}}>
        {item.github && (
          <Button
            target="_blank"
            href={item.github}
            startIcon={<FaGithub />}
            sx={{
              color: "grey",
              border: 1,
              borderColor: "transparent",
              "&:hover": { color: "#673ab7", borderColor: "#673ab7" },
            }}
          >
            View GitHub
          </Button>
        )}
         {item.link && (
          <Button
            target="_blank"
            href={item.link}
            startIcon={<FaLink />}
            sx={{
              color: "grey",
              border: 1,
              borderColor: "transparent",
              "&:hover": { color: "lightBlue", borderColor: "lightBlue" },
            }}
          >
            View Project
          </Button>
        )}
      </Stack>
    </Box>
  );
}

function Elevation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
            <Item key={elevation} elevation={elevation}>
              {`elevation=${elevation}`}
            </Item>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
