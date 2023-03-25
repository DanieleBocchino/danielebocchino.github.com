import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Fade,
  Grid,
  Grow,
  InputBase,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  project,
  projects_mock,
  projects_test,
  tabs,
} from "../data/DataProjects";
import { Item, Section, Title } from "../styles/custom_styles";
import { FaGithub, FaLink } from "react-icons/fa";
import { Stack } from "@mui/system";
import { badgesList, create_badge } from "../data/DataBadge";

function Projects({ projects, isXs }) {
  const ref = useRef(null);
  const [value, setValue] = React.useState(0);
  const [elements, setElements] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

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

  useEffect(() => {
    setElements(filter(value));
  }, [value, projects]);

  const filter = (newValue) => {
    if (newValue === 0) {
      return projects;
    } else if (newValue == 2) {
      var res = [];
      projects.forEach((e) => {
        if (!e.topics.includes("unimi")) res.push(e);
      });
      return res;
    } else {
      var res = [];
      projects.forEach((e) => {
        if (e.topics.includes(tabs[newValue].label.toLowerCase())) res.push(e);
      });
      return res;
    }
  };

  const handleChange = (event, newValue) => {
    setElements([]);
    setValue(newValue);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
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
        <Container
          sx={{
            minHeight: "600px",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {elements.length > 0 &&
            elements
              .slice(0, elements.length > 3 && !showMore ? 3 : elements.length)
              .map((item, index) => (
                <Grow
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  in={isVisible}
                  timeout={100 * (elements.length + index)}
                >
                  <Grid item xs={2} sm={4} key={index}>
                    <Item>
                      <GitProjects item={item} isXs={isXs} />
                      <Divider />
                    </Item>
                  </Grid>
                </Grow>
              ))}
          {elements.length > 3 && (
            <Button
              sx={{
                color: "grey",
                border: 1,
                borderColor: "transparent",
                "&:hover": { color: "orange", borderColor: "orange" },
                mt: 5,
              }}
              onClick={handleToggleShowMore}
              children={`SHOW ${showMore ? "LESS" : "MORE"}`}
            />
          )}
        </Container>
      </Section>
    </Box>
  );
}

export default Projects;



function GitProjects({ item, isXs }) {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        textAlign: "start",
        paddingY: 2,
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          {item.name}
          {!isXs && gitBadge(item.private, item.full_name)}
        </Box>
      </Typography>

      <Typography
        gutterBottom
        variant="body2"
        component="div"
        children={item.description}
      />
      <Box sx={{ my: 2 }}>
        {item.topics.map((elem, index) => {
          return (
            <span
              key={index}
              style={{ padding: 2 }}
              children={create_badge(badgesList[elem])}
            />
          );
        })}
      </Box>
      <Stack spacing={2} direction="row" sx={{ my: 2 }}>
        {item.html_url && (
          <Button
            target="_blank"
            href={item.html_url}
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

function gitBadge(private_repository, repository) {
  const badge_list = ["stars", "forks", "contributors", "last-commit"];
  if (private_repository) {
    return (
      <a href=" " target="_blank">
        <img
          alt="GNU Privacy Guard"
          src="https://img.shields.io/badge/Private-100000?style=flat&logo=GNU Privacy Guard&logoColor=white&labelColor=494949&color=256637"
        />
      </a>
    );
  } else if (private_repository === null) {
    return null;
  } else {
    return (
      <span>
        {badge_list.map((badge, index) => (
          <a
            href="https://github.com/DanieleBocchino/AWS-quicksight-project"
            target="_blank"
            style={{ marginX: 2, padding: 2 }}
          >
            <img
              alt={badge}
              src={`https://img.shields.io/github/${badge}/${repository}`}
            />
          </a>
        ))}
      </span>
    );
  }
}
