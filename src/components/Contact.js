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
import { contacts } from "../data/DataContacts";
import { Title } from "../styles/custom_styles";

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
            my: 5,
            mr: { xs: "0%", sm: "5%" },
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
      <Title dark>Contacts</Title>
      {contacts.map((item, index) => (
        <Container
          key={index}
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
                      xs: 30,
                      sm: 50,
                    },
                    height: {
                      xs: 30,
                      sm: 50,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      variant= "body2"
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
