import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
  Zoom,
} from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { certifications } from "../data/DataCertifications";
import { Stack } from "@mui/system";
import { Section, Title, Item } from "../styles/custom_styles";

function Courses() {
  const ref = useRef();
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
    <Box id="Courses" sx={{ flexGrow: 1, mt: 10, mb: 10 }} ref={ref}>
      <Title dark>Extra Courses</Title>
      <Grid container columns={{ xs: 2, sm: 8, lg: 12, xl: 16 }}>
        {certifications.map((item, index) => (
          <Grid item xs={2} sm={4} key={index}>
            <CertificationsBadge
              item={item}
              index={index}
              time={certifications.length + index * 500}
              animation={isVisible}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function CertificationsBadge({ item, index, time, animation }) {
  return (
    <Box
      sx={{
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Link href={item.link} target="_blank">
        <Avatar
          sx={{
            margin: "auto",
            bgcolor: "transparent",
            height: 200,
            width: 200,
            p: 2,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1.05)" },
          }}
          variant="rounded"
          src={item.img}
        />
      </Link>

      <Button
        disabled={item.released ? false : true}
        href={item.verification}
        target="_blank"
        sx={{
          color: "grey",
          border: 1,
          borderColor: "transparent",
          "&:hover": { color: "orange", borderColor: "orange" },
        }}
      >
        {item.released ? " Verified Certification" : "Work in Progress"}
      </Button>
    </Box>
  );
}

export default Courses;
