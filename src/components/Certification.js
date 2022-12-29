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
import useOnScreen from "../hooks/useOnScreen";
import { certifications } from "../data/DataCertifications";
import { Stack } from "@mui/system";
import { Section, Title, Item } from "../styles/custom_styles";

function Certification() {
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
    <Box id="Certification" sx={{ flexGrow: 1 }} ref={ref}>
      <Section>
        <Title>Certifications</Title>
        <Grid container columns={{ xs: 2, sm: 8, lg: 12, xl: 16 }}>
          {certifications.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item>
                <CertificationsBadge
                  item={item}
                  index={index}
                  time={certifications.length + index * 500}
                  animation={isVisible}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function CertificationsBadge({ item, index, time, animation }) {
  return (
    <>
      <Zoom
        in={animation}
        unmountOnExit
        mountOnEnter
        style={{ transitionDelay: time }}
      >
        <Card sx={{ height: 250 }}>
          <CardHeader
            sx={{ height: 180, m: 0 }}
            avatar={
              <Link href={item.link} target="_blank">
                <Avatar
                  sx={{ bgcolor: "transparent", height: 100, width: 100 }}
                  variant="rounded"
                  src={item.img}
                />
              </Link>
            }
            title={
              <Link
                href={item.link}
                color="inherit"
                underline="hover"
                target="_blank"
              >
                <Typography variant="subtitle1">{item.name}</Typography>
              </Link>
            }
            subheader={
              <Stack>
                <Typography variant="subtitle2">{item.company}</Typography>
                {item.released ? (
                  <>
                    <Typography variant="caption">
                      Released: {item.released}
                    </Typography>
                    <Typography variant="caption">
                      {item.expired != null
                        ? `Expired: ${item.expired}`
                        : "Expired: No Expired"}
                    </Typography>
                  </>
                ) : null}
              </Stack>
            }
          />
          <CardContent sx={{ p: 0 }}>
            <Button
              variant={item.released ? "outlined" : "disabled"}
              href={item.verification}
              target="_blank"
            >
              {item.released ? " Verified Certification" : "Work in Progress"}
            </Button>
          </CardContent>
        </Card>
      </Zoom>
    </>
  );
}

export default Certification;
