import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import {
  Fade,
  Button,
  Typography,
  Card,
  colors,
  CardContent,
  CardMedia,
  CardHeader,
} from "@mui/material";
import { useRef } from "react";
import { contacts } from "../data/DataContacts";
import { Title } from "../styles/custom_styles";
import { Stack } from "@mui/system";

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
        <Box
          sx={{
            backgroundColor: colors.red,
            position: "absolute",
            right: 0,
            m: 2,
            width: "80%",
            maxWidth: 500,
          }}
        >
          <GridCard />
        </Box>
      </Fade>
    </Box>
  );
}

function GridCard() {
  return (
    <Card
      sx={{
        borderRadius: [5],
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        background: "#1A2027",
        alignItems: "center",
        boxShadow: 5,
      }}
    >
      <CardHeader title={<Title dark>Contacts</Title>} />
      <CardContent
   
      >
        {contacts.map((item, index) => (
          <Stack>
            <Button
              sx={{
                p: 2,
                justifyContent: "start",
                transition: "transform 0.15s ease-in-out",
                "&:hover": { transform: "scale3d(1.05, 1.05, 1.05)" },
                backgroundColor: "transparent",
                textTransform: 'none'
              }}
              fullWidth
              variant="raised"
              href={item.href}
              target="_blank"
              startIcon={
                <img
                  src={item.icon}
                  style={{
                    height: 50,
                  }}
                />
              }
            >
              <Stack>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ textAlign: "start" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: "start" }}>
                  {item.data}
                </Typography>
              </Stack>
            </Button>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}

export default Contact;
