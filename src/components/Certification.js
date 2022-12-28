import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  colors,
  Divider,
  IconButton,
  Link,
  ListItemText,
  Pagination,
  Slide,
  Typography,
  Zoom,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import {
  OpenInNew,
  ExpandMoreOutlined,
  ColorLens,
  Subtitles,
} from "@mui/icons-material";
import { certifications } from "../data/DataCertifications";
import { Stack } from "@mui/system";

function Certification() {
  const ref = useRef(null);
  const Section = styled("div")(({ theme }) => ({
    background: theme.palette.text.primary,
  }));

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Title = styled(Paper)(({ theme }) => ({
    background: "transparent",
    fontFamily:'Seymour One',
     fontStyle:'italic',
     fontWeight:700,
    boxShadow: "none",
    ...theme.typography.h4,
    color: "#123455",
    padding: theme.spacing(1),
  }));

  return (
    <Box id="Certification" sx={{ flexGrow: 1 }} ref={ref}>
      <Section>
        <Title >
          Certifications
        </Title>
        <Grid
          container
          columns={{ xs: 2, sm: 8, lg: 12, xl: 16 }}
        >
          {certifications.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item>
                <CertificationsBadge item={item} index={index} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function CertificationsBadge({ item, index }) {
  return (
    <Card sx={{ height: 250, }}>
      <CardHeader
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
                    : "No Expired:"}
                </Typography>
              </>
            ) : null}
          </Stack>
        }
      />
      <CardContent sx={{p:0, pt:0}}>
        <Button
          variant={item.released ? "outlined" : "disabled"}
          href={item.verification}
          target="_blank"
        >
          {item.released ? " Verified Certification" : "Work in Progress"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Certification;
