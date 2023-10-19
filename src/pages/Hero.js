import { Avatar, Box, Fade, Grid, Paper, Tooltip, Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";
import GraphemeSplitter from "grapheme-splitter";
import React, { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Clear } from "@mui/icons-material";

function Hero({ isMobile }) {
  const [writeState, setWriteState] = useState(false);
  const monitorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setWriteState(true), 2500);
  }, []);

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  const DrawerAvatar = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
  }));

  console.log(window)

  const TypeW = styled("div")(({ theme }) => ({
    margin: 15,
    marginTop: "5%",
    fontSize: window.innerWidth > 1200 ? '15px' : window.innerWidth > 1000 ? '12px' : '10px',
  }));

  const typeText = [
    {
      text: (typewriter) => {
        typewriter
          .pasteString(" Daniele@PC-MacBook-Pro ~ % ")
          .pauseFor(500)
          .typeString(" Hi 👋🏻, ")
          .pauseFor(500)
          .typeString(
            "I'm <span style='color:#4285F4;'><strong >Daniele Bocchino<strong></span> 👱🏻‍♂️"
          )
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(7500)
          .pasteString(" Daniele@PC-MacBook-Pro ~ % ")
          .pauseFor(500)
          .typeString(
            " I'm a <span style='color:#4285F4;'><strong>Developer<strong> </span> 💻"
          )
          .pauseFor(1500)
          .deleteChars(14)
          .typeString(
            "<span style='color: #F4B400;'><strong>Freelancer<strong> </span> 👨🏼‍💻"
          )
          .pauseFor(1500)
          .deleteChars(15)
          .typeString(
            "<span style='color: #DB4437;'><strong>Graduate in Computer Science<strong> </span> 👨🏼‍🎓"
          )
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(27500)
          .pasteString(" Daniele@PC-MacBook-Pro ~ % ")
          .pauseFor(500)
          .typeString(
            "I love <span style='color:#4285F4;'><strong>Photography<strong></span> 📸"
          )
          .pauseFor(1500)
          .deleteChars(15)
          .typeString(
            "<span style='color: #DB4437;'><strong>Technology<strong> </span> 📱"
          )
          .pauseFor(1500)
          .deleteChars(14)
          .typeString(
            "<span style='color: #F4B400;'><strong>Mountains<strong> </span> ⛰️"
          )
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(45500)
          .pasteString(" Daniele@PC-MacBook-Pro ~ %")
          .pauseFor(500)
          .typeString(
            " In my free time, I play <span style='color:#4285F4;'><strong>Football<strong></span> ⚽️"
          )
          .pauseFor(1500)
          .deleteChars(17)
          .typeString(
            " go <span style='color: #DB4437;'><strong>Running<strong> </span> 🏃🏼"
          )
          .pauseFor(1500)
          .deleteChars(12)
          .typeString(
            "<span style='color: #0F9D58;'><strong>Hiking<strong> </span> 🥾"
          )
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(65500)
          .pasteString(" Daniele@PC-MacBook-Pro ~ %")
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(66000)
          .pasteString(" Daniele@PC-MacBook-Pro ~ %")
          .start();
      },
    },
    {
      text: (typewriter) => {
        typewriter
          .pauseFor(66500)
          .pasteString(" Daniele@PC-MacBook-Pro ~ %")
          .pauseFor(500)
          .typeString(" <strong>WELCOME!!!!</strong> 🚀🚀")
          .start();
      },
    },
  ];

  const iconList = [
    {
      title: "Terminal",
      image: "/images/hero/terminal_icon.png",
    },
    {
      title: "About",
      image: "/images/hero/about_icon.png",
    },
    {
      title: "Education",
      image: "/images/hero/education_icon.png",
    },
    {
      title: "Skills",
      image: "/images/hero/skill_icon.png",
    },
    {
      title: "Experience",
      image: "/images/hero/experience_icon.png",
    },
    {
      title: "Projects",
      image: "/images/hero/project_icon.png",
    },
    {
      title: "Contacts",
      image: "/images/hero/contact_icon.png",
    },
  ];
  if (isMobile) {
    return null;
  } else {
    return (
      <Fade in timeout={3000}>
        <Box id="Hero" sx={{ display: "flex", marginY: 10 }}>
          <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 3 }}>
            <Grid item xs={1}>
              <DrawerAvatar>
                <Avatar
                  variant="rounded"
                  src="/images/io.jpg"
                  sx={{
                    position: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: [10, 50, 10, 10],
                  }}
                />
              </DrawerAvatar>
            </Grid>

            <Grid item xs={2} sx={{ px: "1%" }}>
              <Paper
                sx={{
                  paddingTop: "3%",
                  flexDirection: "column",
                  justifyContent: "center",
                  component: "stack",
                  backgroundImage: `url(${"/images/hero/monitor.png"})`,
                  width: {
                    sx: 200,
                    sm: "100%",
                    md: "92%",
                    lg: "98%",
                    xl: "100%",
                  },
                  height: {
                    sx: 200,
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                  backgroundSize: "cover",
                  boxShadow: "none",
                }}
              >
                <Box
                  ref={monitorRef}
                  sx={{
                    backgroundImage: `url(${"/images/hero/bg.png"})`,
                    backgroundSize: "cover",

                    m: "auto",
                    display: "flex",
                    width: {
                      sx: 200,
                      sm: "76%",
                      md: "76%",
                      lg: "76%",
                      xl: "76%",
                      xxl: "80%",
                    },

                    height: {
                      sx: 200,
                      sm: "87%",
                      md: "87%",
                      lg: "87%",
                      xl: "87%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      ml: "0.5%",
                      width: "3.5%",
                      maxWidth: 50,
                      position: "absolute",
                    }}
                  >
                    {iconList.map((item, index) => {
                      return (
                        <Docker
                          key={index}
                          setWriteState={() => setWriteState(true)}
                          item={item}
                        />
                      );
                    })}
                  </Box>
                  {writeState && (
                    <Zoom in={writeState} timeout={75} unmountOnExit mountOnEnter>
                      <Paper
                        sx={{
                          m: "auto ",
                          backgroundImage: `url(${"/images/terminal.png"})`,
                          width: { sx: "80%", sm: "80%", md: "80%", lg: "80%" },
                          height: {
                            sx: "80%",
                            sm: "80%",
                            md: "80%",
                            lg: "80%",
                          },
                          backgroundSize: "cover",
                          mt: 2,
                          mr: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            cursor: 'pointer',
                            m: "1%",
                            height: "3%",
                            width: "2%",
                            background: "#ff5f57",
                          }}
                          onClick={() => setWriteState(false)}
                        >
                          <Clear
                            sx={{ fontSize: "65%", textAlign: "center" }}
                          />
                        </Avatar>
                        {writeState && (
                          <TypeW>
                            {typeText.map((item, index) => {
                              return (
                                <Typewriter
                                  key={index}
                                  options={{
                                    stringSplitter: stringSplitter,
                                    cursor: "",
                                  }}
                                  onInit={item.text}
                                />
                              );
                            })}
                          </TypeW>
                        )}
                      </Paper>
                    </Zoom>
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    );
  }
}

function Docker({ item, setWriteState }) {
  return (
    <Tooltip
      title={item.title}
      arrow
      placement="right"
      sx={{ color: "#123456", }}

    >
      <div style={{ cursor: 'pointer' }}>
        <Link to={item.title} spy={true} smooth={true}>
          <Avatar
            src={item.image}
            variant="square"
            sx={{
              my: "10%",
              padding: "5%",
              height: "100%",
              width: "100%",
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale3d(1.25, 1.25, 1)" },
            }}
            onClick={item.title === "Terminal" ? setWriteState : null}
          />
        </Link>
      </div>
    </Tooltip>
  );
}

export default Hero;
