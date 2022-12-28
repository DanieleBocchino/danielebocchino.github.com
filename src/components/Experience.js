import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React, { useState, useRef } from "react";

import Typography from "@mui/material/Typography";
import useOnScreen from "../hooks/useOnScreen";

import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Avatar, Link,  Slide } from "@mui/material";
import { experiences } from "../data/DataExperience";



function Experience() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const Section = styled("div")(({ theme }) => ({
    flexGrow: 1,
    margin: 2,
    width: "100%",
  }));

  const Title = styled('div')(({ theme }) => ({
    background: "transparent",
    fontFamily:'Seymour One',
     fontStyle:'italic',
     fontWeight:700,
    boxShadow: "none",
    ...theme.typography.h4,
    color: "white",
    padding: theme.spacing(1),
  }));
  
  return (
    <Box id="Certification" ref={ref}>
      <Section>
        <Title>Experience</Title>
        <Timeline position="alternate">
          {experiences.map((item, index) => {
            return (
              <CustomTimeLineItem
                key={index}
                item={item}
                time={experiences.length - index}
                isVisible={isVisible}
              />
            );
          })}

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", pt: 5 }}
              variant="body2"
              color="text.secondary"
            >
              <Typography variant="body2">Como, Italy</Typography>
              <Typography variant="caption">1996</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <Link
                href="https://bit.ly/3SWqD87"
                underline="none"
                target="_blank"
              >
                <Avatar src="/images/experience/italy.png" />
              </Link>
            </TimelineSeparator>
            <TimelineContent sx={{ pt: 5, px: 2 }}>
              <Typography variant="h6" component="span">
                Daniele Bocchino
              </Typography>
              <Typography variant="body2"> I was born</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>
    </Box>
  );
  function CustomTimeLineItem({ item, time, isVisible }) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
      <Slide direction="right" in={isVisible} timeout={400 * time}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color={"text.secondary"}
          >
            <Typography variant="body2">{item.place}</Typography>
            <Typography variant="caption">{item.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Link href={item.link} underline="none" target="_blank">
              <TimelineDot
                variant={
                  mouseOver && item.link !== null ? "outlined" : "filled"
                }
                color={item.color}
                onMouseOver={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
              >
                {item.icon}
              </TimelineDot>
            </Link>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography variant="body2"> {item.shortDescription}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Slide>
    );
  }
}

export default Experience;
