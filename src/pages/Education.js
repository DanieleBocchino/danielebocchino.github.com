import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { OpenInNew, ExpandMoreOutlined, Gradient } from "@mui/icons-material";
import { educations, education_text } from "../data/DataEducations";
import { Item, Section, Title } from "../styles/custom_styles";
import ReactCardFlip from "react-card-flip";
import { MdFlip } from "react-icons/md";

function Education() {
  const ref = useRef(null);

  const [state, setstate] = useState(false);
  const [isFlipped, setIsFlipped] = useState([false, false]);

  const handleFlippedClick = (index) => {
    const updatedFlips = [...isFlipped];
    updatedFlips[index] = !updatedFlips[index];
    setIsFlipped(updatedFlips);
  };
  window.addEventListener("resize", (event) => {
    setstate(event.currentTarget.innerWidth > 1200);
  });

  return (
    <Box id="Education" sx={{ flexGrow: 1 }} ref={ref}>
      <Section dark>
        <Title dark>Educations</Title>
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
            <Item textAlign="justify">
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  src="/images/unimi.png"
                  sx={{ maxWidth: 500 }}
                />
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    textAlign="justify"
                    style={{ whiteSpace: "pre-line", color: "grey" }}
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
                    <ReactCardFlip
                      isFlipped={isFlipped[index]}
                      flipDirection="horizontal"
                    >
                      <FrontCard
                        index={index}
                        item={item}
                        handleFlippedClick={handleFlippedClick}
                      />
                      <BackCard
                        index={index}
                        item={item}
                        handleFlippedClick={() => handleFlippedClick(index)}
                      />
                    </ReactCardFlip>
                  </Item>
                </Grid>
              ))
            : null}
        </Grid>
      </Section>
    </Box>
  );
}

function FrontCard({ index, item, handleFlippedClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          borderRadius: [5],
          justifyContent: "center",
          background: "#1A2027",
          border: 2,
          borderColor: "transparent",
          alignItems: "center",
          width: "100%",
          height: "450px",
          maxWidth: "450px",
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image={item.image}
          alt="uni"
          onMouseOver={() => handleFlippedClick(index)}
        />
        <CardContent sx={{ padding: 4.5 }}>
          <Button
            href={item.link}
            target="_blank"
            sx={{
              backgroundColor: "transparent",
              borderBottom: 1.5,
              borderColor: "transparent",
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "orange",
                borderRadius: 0,
              },
            }}
            endIcon={
              <OpenInNew
                sx={{
                  mb: 1,
                  color: "whitesmoke",
                  backgroundColor: "transparent",
                }}
              />
            }
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "whitesmoke" }}
            >
              {item.title}
            </Typography>
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.years}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

function BackCard({ index, item, handleFlippedClick }) {
  const [expanded, setExpanded] = useState(false);
  const [pagination, setPagination] = useState(1);

  const handlePaginationChange = (e, p) => setPagination(p);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          borderRadius: [5],
          justifyContent: "center",
          background: "#1A2027",
          border: 2,
          borderColor: "transparent",
          alignItems: "center",
          width: "100%",
          height: "450px",
          maxWidth: "450px",
        }}
        onMouseLeave={() => handleFlippedClick(index)}
      >
        <CardContent sx={{ height: "380px" }}>
          <Typography
            variant="h4"
            sx={{ color: "orange", textAlign: "start", pb: 2 }}
            children="Exams"
          />

          {item.exams
            .slice(pagination * 5 - 5, pagination * 5)
            .map((item, index) => {
              return (
                <ListItemText
                  sx={{ textAlign: "start" }}
                  key={index}
                  primary={
                    <>
                      <Link
                        href={item.link}
                        underline="none"
                        target="_blank"
                        sx={{
                          color: "text.primary",
                          "&:hover": {
                            color: "orange",
                          },
                        }}
                      >
                        <Typography variant="body2" children={item.title} />
                      </Link>
                      <Link
                        href={item.teacherLink}
                        underline="none"
                        target="_blank"
                        sx={{
                          color: "text.secondary",
                          "&:hover": {
                            color: "orange",
                          },
                        }}
                      >
                        <Typography variant="caption" children={item.teacher} />
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
      </Card>
    </div>
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
          <Typography variant="h4" textAlign={"start"}>
            Exams
          </Typography>
          {item.exams
            .slice(pagination * 5 - 5, pagination * 5)
            .map((item, index) => {
              return (
                <ListItemText
                  sx={{ textAlign: "start" }}
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
