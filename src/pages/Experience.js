import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React, { useEffect, useRef, useState } from "react";

import { Avatar, Collapse, Link, Slide, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { experiences, hardSkills } from "../data/DataExperience";
import { Section, Title } from "../styles/custom_styles";

function Experience() {
  const ref = useRef(null);
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
    <Box id="Experience" ref={ref}>
      <Section dark>
        <Title dark>Experiences</Title>
        <Timeline
          position="alternate"
          sx={{ width: { xs: "100%", sm: "95%" } }}
        >
          {experiences.map((item, index) => {
            return (
              <CustomTimeLineItem
                key={index}
                index={index}
                item={item}
                time={experiences.length - index}
                animation={isVisible}
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
  
  function CustomTimeLineItem({ item, time, animation, index }) {
    const [mouseOver, setMouseOver] = useState(false);
    const [openDescription, setOpenDescription] = useState(false);

    const SkillStack = ({ item, index, hardSkills }) => (
      <Stack
        direction="row"
        spacing={1}
        justifyContent={index % 2 === 0 ? 'flex-end' : 'flex-start'}
        flexWrap="wrap"
        rowGap={1}
      >
        {item.main_skills?.map((skillItem, idx) => {
          const skill = hardSkills.find((lang) => lang.skill.toLowerCase() === skillItem.toLowerCase());
          return skill ? (
            <img
              key={idx}
              src={skill.icon}
              alt={skillItem}
              style={{ width: "20px", height: "20px", margin: "0 5px" }}
            />
          ) : null;
        })}
      </Stack>
    );

    return (

      <Slide
        direction="right"
        in={animation}
        timeout={400 * time}
        unmountOnExit
        mountOnEnter
      >
        <TimelineItem onMouseOver={() => setOpenDescription(true)} onMouseLeave={() => setOpenDescription(false)}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color={"text.secondary"}
          >
            <Stack spacing={1}>
              <Typography variant="body2">{item.place}</Typography>
              <Typography variant="caption">{item.date}</Typography>
              <Box>
                <SkillStack item={item} index={index} hardSkills={hardSkills} />

              </Box>
            </Stack>
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
          <TimelineContent sx={{ py: "12px", }} >
            <Typography variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2"> {item.shortDescription}</Typography>
            <Collapse in={openDescription}>
              <Typography variant="caption" dangerouslySetInnerHTML={{ __html: item.description }} />
            </Collapse>


          </TimelineContent>
        </TimelineItem>
      </Slide>
    );
  }
}

export default Experience;
