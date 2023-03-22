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
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-scroll";
import { about, extra, roles, scrollCard } from "../data/DataAbout";
import { Section, Title, Item } from "../styles/custom_styles";
import CountUp from "react-countup";

function About({}) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cards, setCards] = useState([]);

  const setVisible = () => {
    if (window.scrollY + window.innerHeight >= ref.current.offsetTop)
      setIsVisible(true);
  };

  useEffect(() => {
    setVisible();
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/DanieleBocchino/repos", {})
      .then((response) => response.json())
      .then((json) => {
        const updatedScrollCard = [...scrollCard];
        updatedScrollCard[3].to = json.length;
        setCards(updatedScrollCard);
      });

    if (!isVisible) window.addEventListener("scroll", setVisible);
  }, []);

  return (
    <Box ref={ref} id="About" sx={{ flexGrow: 1 }}>
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

                <Typography
                  sx={{ mt: 3, mb: 2 }}
                  variant="h5"
                  style={{ fontFamily: "GloriaHallelujah" }}
                >
                  {roles}
                </Typography>
                <MuiLink
                  underline="none"
                  href="CV_DanieleBocchino.pdf"
                  target="_blank"
                >
                  <Avatar
                    variant="rounded"
                    src="/images/qr.png"
                    sx={{
                      width: "100%",
                      height: "100%",
                      maxWidth: 350,

                      m: "auto",
                      p: 2,
                      transition: "transform 0.15s ease-in-out",
                      "&:hover": { transform: "scale3d(1.05, 1.05, 1.05)" },
                    }}
                  />
                </MuiLink>
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
                    <Typography
                      variant="subtitle2"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Item>
            </Grid>
          </Slide>
        </Grid>

        <Grid
          container
          spacing={{ xs: 1, sm: 2 }}
          columns={{ xs: 2, sm: 8, lg: 16, xl: 16 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {cards.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item sx={{ width: "90%", margin: "auto" }}>
                <SpecialCard item={item} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function SpecialCard({ item }) {
  const [state, setState] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          borderRadius: [5],
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          background: state ? "transparent" : "#1A2027",
          backgroundColor: "transparent",
          alignItems: "center",
          boxShadow: state ? 5 : 3,
          color: state ? item.color : "#ffffff",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Link to={item.link} spy={true} smooth={true}>
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
            <CardMedia>{item.icon}</CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6">
                <CountUp
                  start={0}
                  end={item.to}
                  duration={2.75}
                  suffix="+"
                  startOnMount={false}
                  enableScrollSpy
                  scrollSpyDelay={200}
                >
                  {({ countUpRef, start }) => (
                    <Typography variant="h4" dark ref={countUpRef} />
                  )}
                </CountUp>
                {item.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

export default About;
