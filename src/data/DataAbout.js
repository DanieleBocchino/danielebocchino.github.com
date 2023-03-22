import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CodeIcon from "@mui/icons-material/Code";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { ContactPage, GitHub, LinkedIn } from "@mui/icons-material";
import { educations } from "./DataEducations";
import { certifications } from "./DataCertifications";
import { dataSkills, programmingLanguages } from "./DataSkills";
import { projects_test } from "./DataProjects";

export const roles = "MSc Student in Computer Science";

export const extra = [
  {
    title: "GitHub",
    link: "https://github.com/DanieleBocchino",
    icon: <GitHub fontSize="large" />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/daniele-bocchino-aa602a20b",
    icon: <LinkedIn fontSize="large" />,
  },
];

export const scrollCard = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    title: "Exams",
    link: "Education",
    to: educations[0].exams.length + educations[1].exams.length,
    description:
      "Computer Science Exams completed during Bachelor's and Master's Degree",
    color: "#4285F4",
  },
  {
    icon: <MilitaryTechIcon sx={{ fontSize: 50 }} />,
    title: "Certifications",
    link: "Certification",
    to: certifications.length,
    description: "Professional Certifications achieved",
    color: "#DB4437",
  },

  {
    icon: <CodeIcon sx={{ fontSize: 50 }} />,
    title: "Languages",
    link: "Skills",
    to: dataSkills[0].lst.length,
    description: "Programming languages used in at least one project",
    color: "#F4B400",
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 50 }} />,
    title: "Projects",
    link: "Projects",
    to: null,
    description: "Private and University projects developed",
    color: "#0F9D58",
  },
];

export const about = [
  {
    title: "👨‍💻 𝙒𝙝𝙤 𝙄 𝙖𝙢",
    text:
      "I am Bocchino Daniele and I am a Master Student of Computer Science at University of Milan. \nWhile at the university I was able to approach many aspects of computer science and better understand how much this science is present in everything around us.\n I was fascinated by how vast and mutable this world is, sparking in me a great passion for this field. Through my undergraduate studies I possess an excellent Computer Science background that I wish to enrich over time.",
  },
  {
    title: " 🧠 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝙏𝙧𝙖𝙞𝙩𝙨",
    text:
      "I am an ambitious and enterprising guy. In fact, I love to constantly set goals for myself to achieve in order to stimulate my personal and educational growth. \n I consider myself a curious person and always looking for the best possible result. These characteristics often lead me to inform myself independently to discover new things and put my whole self into what I do. \n Characteristically, I am very sunny, empathetic and friendly, characteristics that make it very easy for me to fit into a group of people. I prefer teamwork over individual work as I firmly believe that improvement comes from continuous comparison with colleagues and friends. For this very reason, I like to put myself on the line and question myself in order to improve my personal and educational growth. \n I possess a natural predisposition for leadership as I possess excellent organizational and communication skills. In fact, I firmly believe that organization and planning are the basis of all success in order to enjoy maximum results.",
  },
  {
    title: "✨ 𝙈𝙮 𝙥𝙖𝙨𝙨𝙞𝙤𝙣𝙨",
    text:
      "I am so passionate about software development that I invest much of my free time in creating mobile and web applications.\n I am fascinated by data, by everything that is quantifiable and from which information can be extracted. For this reason, I oriented my master's studies toward data analysis and machine learning. In addition to my passion for technology, I love playing outdoor sports, taking walks in the mountains, and photographing the nature around me.",
  },
  {
    title: "🚀 𝙁𝙪𝙩𝙪𝙧𝙚 𝘼𝙢𝙗𝙞𝙩𝙞𝙤𝙣𝙨",
    text:
      "After finishing my education, I would like to direct my career towards data analysis and cloud engineering.I would like to acquire certifications that can be a guarantee of competence and professionalism in my areas of interest.\n My dream, although ambitious, would be to one day be able to work for Google.",
  },
];
