import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import {
  Avatar,
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
  WidthWideOutlined,
} from "@mui/icons-material";
import { educations, education_text } from "../data/DataEducations";
import { useTheme } from "@mui/material/styles";

function Education() {
  const ref = useRef(null);
  const theme = useTheme();

  const containerRef = useRef(null);

  const isVisible = useOnScreen(ref);

  const personalCard = [
    {
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
      title: "Education",
      description: "MSc Computer Science Degree",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50 }} />,
      title: "Skills",
      description: "MSc Computer Science Degree",
    },
  ];

  const Section = styled("div")(({ theme }) => ({
    background: theme.palette.text.primary,
  }));

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  const Title = styled(Paper)(({ theme }) => ({
    background: "transparent",
    fontFamily:'Seymour One',
     fontStyle:'italic',
    boxShadow: "none",
    ...theme.typography.h4,
    color: "#123455",
    padding: theme.spacing(1),
  }));

 
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
                  <Typography variant="body1" color="black" fontFamily='Quicksand' fontWeight={500}>
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
          startDecorator={<OpenInNew />}
        >
          Go official website
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
