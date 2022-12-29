import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { Link } from "react-scroll";
import { about, roles } from "../data/DataAbout";

function About() {
  const Section = styled("div")(({ theme }) => ({
    flexGrow: 1,
    marginX: 2,
    width: "100%",
  }));

  const ref = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useOnScreen(ref);



  const personalCard = [
    {
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
      title: "Education",
      description: "University & Certification",
      color: "#4285F4",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50 }} />,
      title: "Skills",
      description: "My Hard & Soft Skills",
      color: "#DB4437",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 50 }} />,
      title: "Experience",
      description: "My work experiences",
      color: "#F4B400",
    },
    {
      icon: <ComputerIcon sx={{ fontSize: 50 }} />,
      title: "Projects",
      description: "My projects",
      color: "#0F9D58",
    },
  ];

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Title = styled("div")(({ theme }) => ({
    background: "transparent",
    fontFamily: "Seymour One",
    fontStyle: "italic",
    fontWeight: 700,
    boxShadow: "none",
    ...theme.typography.h4,
    color: "white",
    padding: theme.spacing(1),
  }));

  return (
    <Box ref={ref} id="About">
      <Section>
        <Title>About Me</Title>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 12 }}
          ref={containerRef}
        >
          <Slide
            mountOnEnter
            unmountOnExit
            direction="left"
            in={isVisible}
            timeout={500}
          >
            <Grid item xs={4} ref={containerRef}>
              <Item>
                <Avatar
                  variant="rounded"
                  src="/images/avatar2.jpg"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />

                <Typography sx={{ mt: 3 }} variant="h3">
                  {roles}
                </Typography>
              </Item>
            </Grid>
          </Slide>
          <Slide
            mountOnEnter
            unmountOnExit
            direction="right"
            in={isVisible}
            timeout={500}
            container={containerRef.current}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
              rowSpacing={{ xs: 4, sm: 2, md: 2, lg: 1 }}
            >
              <Item style={{ textAlign: "left" }}>
                {about.map((item, index) => (
                  <Stack key={index} sx={{ m: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="subtitle2">{item.text}</Typography>
                  </Stack>
                ))}
              </Item>
            </Grid>
          </Slide>
        </Grid>

        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 8, lg: 16, xl: 16 }}
        >
          {personalCard.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item style={{ textAlign: "left", maxWidth: 350 }}>
                <Link to={item.title} spy={true} smooth={true}>
                  <SpecialCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function SpecialCard({ icon, title, description, color }) {
  const [state, setState] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: [5],
        justifyContent: "center",
        textAlign: "center",
        background: state ? "transparent" : "#1A2027",
        backgroundColor: "transparent",
        alignItems: "center",
        boxShadow: state ? 5 : 3,
        color: state ? color : "#ffffff",
      }}
      maxWidth={100}
    >
      <CardActionArea
        sx={{
          padding: 2.5,
          borderColor: "transparent",
          boxShadow: "none",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          borderRadius: [5],
        }}
        onMouseOver={() => setState(true)}
        onMouseLeave={() => setState(false)}
        onClick={() => setState(true)}
      >
        <CardMedia textAlign="center">{icon}</CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default About;
