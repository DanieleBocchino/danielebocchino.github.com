import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useRef, useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import { Link } from "react-scroll";
import { about, extra, roles, scrollCard } from "../data/DataAbout";
import { Section, Title, Item } from "../styles/custom_styles";

function About({}) {
  const ref = useRef(null);
  const containerRef = useRef(null);
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
    <Box ref={ref} id="About">
      <Section dark>
        <Title dark>About Me</Title>

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

                <Typography sx={{ mt: 3, mb: 2 }} variant="h4">
                  {roles}
                </Typography>
                {extra.map((item, index) => (
                  <Box
                    key={index}
                    component="div"
                    sx={{
                      display: "inline",
                      p: 1,
                    }}
                  >
                    <Tooltip title={item.title}>
                      <IconButton
                        aria-label={item.title}
                        href={item.link}
                        target="_blank"
                      >
                        {item.icon}
                      </IconButton>
                    </Tooltip>
                  </Box>
                ))}
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
          {scrollCard.map((item, index) => (
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
        <CardMedia>{icon}</CardMedia>
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
