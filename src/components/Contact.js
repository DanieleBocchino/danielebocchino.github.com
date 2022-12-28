import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import {
  Avatar,
  Fade,
  Button,
  Typography,
  Container,
  colors,
} from "@mui/material";
import { useRef } from "react";

const listContacts = [
  {
    icon: "/images/contact/email.png",
    data: "bocchino.daniele@gmail.com",
    name: "Email Address",
    href: `mailto:bocchino.daniele@gmail.com`,
  },
  {
    icon: "/images/contact/phone.png",
    data: "(+39) 3311826439",
    name: "Phone Number",
    href: `tel:+393311826439`,
  },
  {
    icon: "/images/contact/linkedin.png",
    data: "Daniele Bocchino",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/daniele-bocchino-aa602a20b/",
    href: `https://www.linkedin.com/in/daniele-bocchino-aa602a20b/`,
  },
];

const Title = styled("div")(({ theme }) => ({
  background: "transparent",
  fontFamily: "Seymour One",
  fontStyle: "italic",
  fontWeight: 700,
  boxShadow: "none",
  textAlign: "center",
  ...theme.typography.h4,
  color: "white",
  padding: theme.spacing(1),
}));

function Contact() {
  const ref = useRef(null);

  return (
    <Box
      id="Contacts"
      sx={{
        height: { xs: "60vh", sm: "50vh" },
        backgroundImage: `url(${"/images/contact/bg.png"})`,
        display: "flex",
      }}
      ref={ref}
    >
      <Fade in timeout={2000}>
        <Container
          sx={{
            backgroundColor: colors.red,
            my: "5vh",
            mr: "5%",
            width: "50vh",
          }}
        >
          <ComplexGrid />
        </Container>
      </Fade>
    </Box>
  );
}

function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        borderRadius: 10,
      }}
    >
      <Title>Contacts</Title>
      {listContacts.map((item, key) => (
        <Container
          sx={{
            m: "auto",
            backgroundColor: "transparent",
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1.05)" },
            cursor: "pointer",
          }}
        >
          <Button
            sx={{ my: 2 }}
            style={{ backgroundColor: "transparent" }}
            fullWidth
            variant="raised"
            href={item.href}
            target="_blank"
          >
            <Grid container spacing={2} sx={{ my: 0 }}>
              <Grid item>
                <Avatar
                  src={item.icon}
                  variant="square"
                  sx={{
                    m: "auto",
                    width: {
                      xs: 35,
                      sm: 50,
                    },
                    height: {
                      xs: 35,
                      sm: 50,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      variant={{ xs: "subtitle4", sm: "subtitle1" }}
                      component="div"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "lowercase" }}
                    >
                      {item.data}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Button>
        </Container>
      ))}
    </Paper>
  );
}

export default Contact;
