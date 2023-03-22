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
import { project, projects_test, tabs } from "../data/DataProjects";
import { Item, Section, Title } from "../styles/custom_styles";
import { FaGithub, FaLink } from "react-icons/fa";
import { Stack } from "@mui/system";
import { badgesList } from "../data/DataBadge";

function Projects({ projects }) {
  const ref = useRef(null);
  const [value, setValue] = React.useState(0);
  const [elements, setElements] = useState([]);

  /*  useEffect(() => {
    fetch("https://api.github.com/users/DanieleBocchino/repos")
      .then((res) => res.json())
      .then((json) => {

        console.log(typeof(json));
        
        const mergedList = json.map(item1 => {
          const item2 = projects_test.find(item2 => item2.id === item1.id);
          return { ...item1, ...item2 };
        });
        
        setElements([ ...mergedList]);
      });
  }, []); */

  const filter = (newValue) => {
    if (newValue === 0) {
      return projects;
    } else {
      var res = [];
      projects.forEach((e) => {
        if (e.languages.includes(tabs[newValue].label.toLowerCase()))
          res.push(e);
      });
      return res;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //setProjects(filter(newValue));
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
        {projects.length > 0 &&
          projects.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item>
                <GitProjects item={item} />
                <Divider />
              </Item>
            </Grid>
          ))}
        {/* {projects.map((item, index) => (
          <Grid item xs={2} sm={4} key={index}>
            <Item>
              <Card item={item} />
              <Divider />
            </Item>
          </Grid>
        ))} */}
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
      {/*       {gitBadge(!item.repository)}
       */}
      <Typography
        gutterBottom
        variant="body2"
        component="div"
        children={item.description}
      />
      <Box sx={{ my: 2 }}>
        {item.badges.map((elem, index) => (
          <span style={{ padding: 2 }}>{elem}</span>
        ))}
      </Box>
      <Stack spacing={2} direction="row" sx={{ my: 2 }}>
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

function GitProjects({ item }) {
  /*   const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${item.full_name}/languages`)
      .then((res) => res.json())
      .then((json) => {
        setLanguages(json);
      });
  }, []); */

  console.log(item.languages)

  const checkBadge = (name) => {
    switch (name) {
      case "javascript":
        return [badgesList.js];
      case "jupyter notebook":
        return [badgesList.jupyter, badgesList.python];
      default:
        return [badgesList[name]];
    }
  };

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
          {gitBadge(item.private, item.full_name)}
        </Box>
      </Typography>

      <Typography
        gutterBottom
        variant="body2"
        component="div"
        children={item.description}
      />
      <Box sx={{ my: 2 }}>
        {item.languages &&
          item.languages !== undefined &&
          item.languages.map((elem, index) =>
            checkBadge(elem.toLowerCase()).map((e, index) => (
              <span style={{ padding: 2 }}>{e}</span>
            ))
          )}

        {/* {item.badges.map((elem, index) => (
          <span style={{ padding: 2 }}>{elem}</span>
        ))} */}
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

      {/*  <Typography
        gutterBottom
        variant="h5"
        component="div"
        children={item.title}
      />
                           {gitBadge(item.full_name)}

       
      <Typography
        gutterBottom
        variant="body2"
        component="div"
        children={item.description}
      />
      <Box sx={{ my: 2 }}>
        {item.badges.map((elem, index) => (
          <span style={{ padding: 2 }}>{elem}</span>
        ))}
      </Box>
      <Stack spacing={2} direction="row" sx={{ my: 2 }}>
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
      </Stack> */}
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
  } else {
    return (
      <span style={{ margin: "1rem" }}>
        {badge_list.map((badge, index) => (
          <a
            href="https://github.com/DanieleBocchino/AWS-quicksight-project"
            target="_blank"
            style={{ marginX: 2 }}
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
