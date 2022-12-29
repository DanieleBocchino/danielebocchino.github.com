import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  Link,
  ListItemText,
  Pagination,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { OpenInNew, ExpandMoreOutlined } from "@mui/icons-material";
import { educations, education_text } from "../data/DataEducations";
import { Item, Section, Title } from "../styles/custom_styles";

function Education() {
  const ref = useRef(null);

  const [state, setstate] = useState(false);

  window.addEventListener("resize", (event) => {
    setstate(event.currentTarget.innerWidth > 1200);
  });

  return (
    <Box id="Education" sx={{ flexGrow: 1 }} ref={ref}>
      <Section>
        <Title>Educations</Title>
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2 }}
          columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        >
          {state
            ? educations.map((item, index) => (
                <Grid item xs={2} sm={4} key={index}>
                  <Item>
                    <SpecialCard item={item} />
                  </Item>
                </Grid>
              ))
            : null}

          <Grid item xs={2} sm={4} md={8} lg={4}>
            <Item>
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  src="/images/unimi.png"
                  sx={{ maxWidth: 500 }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="black"
                    fontFamily="Quicksand"
                    fontWeight={500}
                  >
                    {education_text}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          {!state
            ? educations.map((item, index) => (
                <Grid item xs={2} sm={4} key={index}>
                  <Item>
                    <SpecialCard item={item} />
                  </Item>
                </Grid>
              ))
            : null}
        </Grid>
      </Section>
    </Box>
  );
}

function SpecialCard({ item }) {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = useState(false);
  const [pagination, setPagination] = useState(1);

  const handleExpandClick = () => setExpanded(!expanded);

  const handlePaginationChange = (e, p) => setPagination(p);

  return (
    <Card
      sx={{
        borderRadius: [5],
        justifyContent: "center",
        background: "#1A2027",
        border: 2,
        borderColor: "transparent",
        alignItems: "center",
        width: "100%",
        marginX: 2,
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={item.image}
        alt="green iguana"
      />
      <CardContent sx={{ padding: 4.5 }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.years}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          aria-posinset={2}
          size="small"
          component="a"
          href={item.link}
          target="_blank"
          startIcon={<OpenInNew />}
        >
          Go to course website
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreOutlined />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4">Exams</Typography>
          {item.exams
            .slice(pagination * 5 - 5, pagination * 5)
            .map((item, index) => {
              return (
                <ListItemText
                  key={index}
                  primary={
                    <>
                      <Link href={item.link} underline="hover" target="_blank">
                        <Typography variant="body2" color="text.primary">
                          {item.title}
                        </Typography>
                      </Link>
                      <Link
                        href={item.teacherLink}
                        underline="hover"
                        target="_blank"
                      >
                        <Typography variant="caption" color="text.secondary">
                          {item.teacher}
                        </Typography>
                      </Link>

                      <Divider />
                    </>
                  }
                />
              );
            })}
        </CardContent>
        <Box sx={{ justifyItems: "center", padding: 2 }}>
          <Pagination
            count={Math.ceil(item.exams.length / 5)}
            onChange={handlePaginationChange}
          />
        </Box>
      </Collapse>
    </Card>
  );
}

export default Education;
