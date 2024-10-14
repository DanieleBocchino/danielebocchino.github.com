
import {
  DEFAULT_SKILL_BLUE,
  DEFAULT_SKILL_GREEN,
  DEFAULT_SKILL_ORANGE,
  DEFAULT_SKILL_PURPLE,
  DEFAULT_SKILL_RED,
  DEFAULT_SKILL_YELLOW,
} from "../functions/ColorFunction";
import { ReactComponent as MyAnalytics } from "../svg/analytics.svg";
import { ReactComponent as MyAWS } from "../svg/aws.svg";
import { ReactComponent as MyCreative } from "../svg/creative.svg";
import { ReactComponent as MyCuriosity } from "../svg/critical.svg";
import { ReactComponent as MyFlutter } from "../svg/flutter.svg";
import { ReactComponent as MyGit } from "../svg/git.svg";
import { ReactComponent as MyMotivation } from "../svg/motivation.svg";
import { ReactComponent as MyLeadership } from "../svg/organization.svg";
import { ReactComponent as MyPY } from "../svg/python.svg";
import { ReactComponent as MyReact } from "../svg/react.svg";
import { ReactComponent as MySQL } from "../svg/sql.svg";
import { ReactComponent as MyCritical } from "../svg/team.svg";

export const dataSkills = [
  {
    label: "Programming Languages",
    lst: [
      {
        skill: "PYTHON",
        value: 4.5,
        icon: "/images/skills/python.png",
      },
      {
        skill: "JAVA",
        value: 3.5,
        icon: "/images/skills/java.png",
      },
      {
        skill: "JAVASCRIPT",
        value: 4,
        icon: "/images/skills/js.png",
      },
      {
        skill: "DART",
        value: 4,
        icon: "/images/skills/dart.png",
      },
      {
        skill: "TYPESCRIPT",
        value: 3.5,
        icon: "/images/skills/ts.png",
      },
      {
        skill: "HTML",
        value: 4,
        icon: "/images/skills/html.png",
      },
      {
        skill: "CSS",
        value: 4,
        icon: "/images/skills/css.png",
      },
      {
        skill: "SQL",
        value: 3.5,
        icon: "/images/skills/postgres.png",
      },
    ],
  },
  {
    label: "Soft Skills",
    lst: [
      {
        skill: "EMPATHY",
        value: 4.5,
        icon: "/images/skills/empathy.png",
      },
      {
        skill: "CREATIVITY",
        value: 5,
        icon: "/images/skills/creativity.png",
      },
      {
        skill: "COMMUNICATION",
        value: 4,
        icon: "/images/skills/communication.png",
      },

      {
        skill: "CRITICAL THINKING",
        value: 4.5,
        icon: "/images/skills/critical.png",
      },
      {
        skill: "LEADERSHIP",
        value: 4,
        icon: "/images/skills/leader.png",
      },
      {
        skill: "TEAMWORK",
        value: 4.5,
        icon: "/images/skills/team.png",
      },
      {
        skill: "FLEXIBILITY",
        value: 5,
        icon: "/images/skills/flexibility.png",
      },
      {
        skill: "PROBLEM SOLVING",
        value: 4.5,
        icon: "/images/skills/problem.png",
      },
      {
        skill: "MOTIVATION",
        value: 5,
        icon: "/images/skills/motivation.png",
      },

      {
        skill: "ORGANIZATION",
        value: 5,
        icon: "/images/skills/organization.png",
      },
    ],
  },
  {
    label: "Framework",
    lst: [
      {
        skill: "REACT",
        value: 4.5,
        icon: "/images/skills/react.png",
      },
      {
        skill: "FLUTTER",
        value: 4.5,
        icon: "/images/skills/flutter.png",
      },
      {
        skill: "MATERIAL UI",
        value: 4.5,
        icon: "/images/skills/material.png",
      },
      {
        skill: "CHAKRA UI",
        value: 4.5,
        icon: "/images/skills/chakra.png",
      },
      {
        skill: "BULMA",
        value: 4.5,
        icon: "/images/skills/bulma.png",
      },
      {
        skill: "BOOTSTRAP",
        value: 4.5,
        icon: "/images/skills/bootstrap.png",
      },
    ],
  },
  {
    label: "Database",
    lst: [
      {
        skill: "MongoDB",
        value: 3.5,
        icon: "/images/skills/mongo.png",
      },
      {
        skill: "PostgreSQL",
        value: 3.5,
        icon: "/images/skills/postgres.png",
      },
      {
        skill: "MySQL",
        value: 3.5,
        icon: "/images/skills/mysql.png",
      },
    ],
  },
];

export const programmingLanguages = [
  {
    skill: "PYTHON",
    value: 4.5,
    icon: "/images/skills/python.png",
  },
  {
    skill: "JAVA",
    value: 3.5,
    icon: "/images/skills/java.png",
  },
  {
    skill: "JAVASCRIPT",
    value: 4,
    icon: "/images/skills/js.png",
  },
  {
    skill: "DART",
    value: 4,
    icon: "/images/skills/dart.png",
  },
  {
    skill: "TYPESCRIPT",
    value: 3.5,
    icon: "/images/skills/ts.png",
  },
  {
    skill: "HTML",
    value: 4,
    icon: "/images/skills/html.png",
  },
  {
    skill: "CSS",
    value: 4,
    icon: "/images/skills/css.png",
  },
  {
    skill: "SQL",
    value: 3.5,
    icon: "/images/skills/postgres.png",
  },
];


export const softSkills = [];

export const skills = [
  {
    skill: "Python",
    svg: MyPY,
    options: { fill: true, color: DEFAULT_SKILL_YELLOW },
    text:
      "Python is my favorite programming language, I have used it in different projects and with several libraries in a lot of fields such as Data Science, Machine Learning, backend development etc..",
  },

  {
    skill: "AWS Cloud",
    svg: MyAWS,
    options: { stroke: true, color: DEFAULT_SKILL_ORANGE },
    text:
      "I want to become a cloud solution architect. I am working on various projects and hands-on labs to gain experience and become a cloud expert.  ",
  },
  {
    skill: "SQL",
    svg: MySQL,
    options: { color: DEFAULT_SKILL_GREEN },
    text:
      "I have a strong theoretical understanding of SQL, having passed an exam during my bachelor's degree. Additionally, I have worked with SQL particularly with MySQL and Postgres, on several projects.",
  },
  {
    skill: "React",
    svg: MyReact,
    options: { stroke: true, color: DEFAULT_SKILL_BLUE },
    text:
      "I have excellent knowledge of React, thanks to the web applications that I have developed over the years. To date, I have built more than five web applications using this framework.",
  },
  {
    skill: "GIT",
    svg: MyGit,
    options: { stroke: true, color: DEFAULT_SKILL_PURPLE },
    text:
      "I have been using GIT for almost 8 years, and I possess a deep understanding of its usage. Additionally, I have recently acquired knowledge related to CI/CD as well.",
  },
  {
    skill: "Flutter",
    svg: MyFlutter,
    options: { stroke: true, color: DEFAULT_SKILL_BLUE },
    text:
      "I independently developed a complete cross-platform application using Flutter. I find the framework very enjoyable to work with, and in my free time, I am developing additional applications using Flutter.",
  },
  {
    skill: "Motivation",
    svg: MyMotivation,
    options: { stroke: true, color: DEFAULT_SKILL_RED },
    text:
      "I am a highly ambitious and motivated individual, and I believe that motivation is the most significant factor influencing a person's career. For me, motivation is the driving force that pushes me to give my best and strive for excellence.",
  },
  {
    skill: "Creativity",
    svg: MyCreative,
    options: { stroke: true, color: DEFAULT_SKILL_ORANGE },
    text:
      "It is a characteristic that has distinguished me since I was a child. Within the groups that I have worked with, my creativity has allowed me to provide consistently innovative and groundbreaking ideas.",
  },
  {
    skill: "Curiousity",
    svg: MyCuriosity,
    options: { color: DEFAULT_SKILL_GREEN },
    text:
    "It is a characteristic that has distinguished me since I was a child. Within the groups that I have worked with, my creativity has allowed me to provide consistently innovative and groundbreaking ideas.",
  },

  {
    skill: "Critical thinking",
    svg: MyCritical,
    options: { stroke: true, color: DEFAULT_SKILL_PURPLE },
    text :"I love to analyze in detail every situation, from professional to leisure, in order to make targeted decisions aimed at maximizing gain."
  },
  {
    skill: "Leadership",
    svg: MyLeadership,
    options: { color: DEFAULT_SKILL_YELLOW },
    text:"I like to participate enthusiastically, have a lot of self-confidence, and am very proactive within a group. For these reasons, I possess a natural aptitude for leadership "
  },
  {
    skill: "Precision",
    svg: MyAnalytics,
    options: { stroke: true, color: DEFAULT_SKILL_RED },
    text:"I'm a very precise and organized guy in the things I do. I love having clear outlines and action plans for every situation. I am convinced that organization and attention to detail are the basis for every success"
  },
];
