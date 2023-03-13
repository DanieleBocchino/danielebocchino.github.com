import {
  Biotech,
  LanguageOutlined,
  PhoneIphone,
  School,
} from "@mui/icons-material";
import React from "react";
import {
  DEFAULT_SKILL_TEAL,
  DEFAULT_SKILL_PURPLE,
  DEFAULT_SKILL_RED,
  DEFAULT_SKILL_YELLOW,
  DEFAULT_SKILL_ORANGE,
  DEFAULT_SKILL_BLUE,
  DEFAULT_SKILL_GREEN,
} from "../functions/ColorFunction";
import {
  FaUniversity,
  FaReact,
  FaAws,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { badgesList } from "./DataBadge";

export const projects = [
  {
    title: "My Portfolio",
    shortDescription: "My portfolio website",
    description:
      "This project include my portfolio website. The site has been create with ReactJS. \n For Styles I wanted to use the Material UI",

    technology: [
      { img: "/images/skills/react.png", name: "ReactJS" },
      { img: "/images/skills/material.png", name: "MaterialUI" },
    ],
    available: [""],
    link: "",
    icon: <LanguageOutlined />,
    color: "#ff9100",
  },
  {
    title: "BPE - Cloud Gaming",
    shortDescription: "Business Process Engineer Exam Project",
    description:
      "In this project I sis an analysis of Cloud Gaming. In particular I assumed a fake Cloud Gaming Company performed and calculated the KPI about it",
    technology: [
      { img: "/images/skills/e3value.png", name: "E3value" },
      { img: "/images/skills/bizagi.png", name: "Bizagi" },
    ],
    available: [""],
    link: "https://github.com/DanieleBocchino/BPE-Cloud-Gaming/",
    icon: <School />,
    color: "#03a9f4",
  },
  {
    title: "SafePass - Manager",
    shortDescription: "Mobile application realized in Flutter.",
    description: "",
    technology: [
      { img: "/images/skills/flutter.png", name: "Flutter" },
      { img: "/images/skills/material.png", name: "MaterialUI" },
      { img: "/images/skills/python.png", name: "Python" },
      { img: "/images/skills/flask.png", name: "Flask" },
      { img: "/images/skills/mongo.png", name: "MongoDB" },
    ],
    available: [""],
    link: null,
    icon: <PhoneIphone />,
    color: "#ff9100",
  },
  {
    title: "BIS - Challenge 2020",
    shortDescription: "Exam project of Business Information System ",
    description: "",
    technology: [
      { img: "/images/skills/python.png", name: "Python" },
      { img: "/images/skills/pandas.png", name: "Pandas" },
      { img: "/images/skills/pm4py.png", name: "PM4PY" },
      { img: "/images/skills/colab.png", name: "Google Colab" },
      { img: "/images/skills/disco.png", name: "Disco" },
    ],
    available: [""],
    link: "https://github.com/DanieleBocchino/BIS",
    icon: <School />,
    color: "#03a9f4",
  },
  {
    title: "Ciuka - Party Game",
    shortDescription: "Mobile application realized in Flutter.",
    description:
      "Mobile application realized in Flutter. it is a basic party game to liven up parties among friends",
    technology: [
      { img: "/images/skills/flutter.png", name: "Flutter" },
      { img: "/images/skills/material.png", name: "MaterialUI" },
      { img: "/images/skills/firebase.png", name: "Firebase" },
    ],
    available: [""],
    link: "https://www.b-except.com/ciuka/share.html",
    icon: <PhoneIphone />,
    color: "#ff9100",
  },
  {
    title: "ISLab",
    shortDescription: "Website created for ISLab of University of Milan (VAST)",
    description:
      "During my research collaboration with University of Milan I created a website for ISLab Laboratory.",
    technology: [
      { img: "/images/skills/react.png", name: "ReactJS" },
      { img: "/images/skills/mongo.png", name: "MongoDB" },
      { img: "/images/skills/python.png", name: "Python" },
      { img: "/images/skills/flask.png", name: "Flask" },
      { img: "/images/skills/css.png", name: "CSS" },
    ],
    available: [""],
    link: "https://islab.di.unimi.it/",
    icon: <Biotech />,
    color: "#6fbf73",
  },
  {
    title: "Lora Giusta",
    shortDescription: "Website created for a small and lovely B&B in Como",
    description: "",

    technology: [
      { img: "/images/skills/react.png", name: "ReactJS" },
      { img: "/images/skills/js.png", name: "Javascript" },
      { img: "/images/skills/node.png", name: "NodeJS" },
      { img: "/images/skills/bulma.png", name: "Bulma" },
    ],
    available: [""],
    link: "https://lora-giusta.com/",
    icon: <LanguageOutlined />,
    color: "#ff9100",
  },
  {
    title: "Medilett",
    shortDescription:
      "Platform created for department of philology at  UNIMI (PARLI')",
    description:
      "During my second research collaboration with University of Milan I created a private platform for Philology Department.",

    technology: [
      { img: "/images/skills/react.png", name: "ReactJS" },
      { img: "/images/skills/python.png", name: "Python" },
      { img: "/images/skills/flask.png", name: "Flask" },
      { img: "/images/skills/postgres.png", name: "PostgreSQL" },
      { img: "/images/skills/chakra.png", name: "ChakraUI" },
    ],
    available: [""],
    link: null,
    icon: <Biotech />,
    color: "#6fbf73",
  },

  {
    title: "Arch2Lab Project",
    shortDescription: "Exam project of Computer Architecture II",
    description: "",
    technology: [{ img: "/images/skills/assembly.png", name: "Assembly" }],
    available: [""],
    link: "https://github.com/DanieleBocchino/arch2lab",
    icon: <School />,
    color: "#03a9f4",
  },
  {
    title: "Arch1Lab Project",
    shortDescription: "Exam project of Computer Architecture I",
    description: "",
    technology: [{ img: "/images/skills/logisim.png", name: "Logisim" }],
    available: [""],
    link: "https://github.com/DanieleBocchino/arch1lab",
    icon: <School />,
    color: "#03a9f4",
  },
];

export const tabs = [
  {
    position: 0,
    icon: <DiGitBranch />,
    label: "All",
    color: DEFAULT_SKILL_TEAL,
  },
  {
    position: 1,
    icon: <FaUniversity />,
    label: "Unimi",
    color: DEFAULT_SKILL_PURPLE,
  },
  {
    position: 2,
    icon: <FaLaptopCode />,
    label: "Personal",
    color: DEFAULT_SKILL_RED,
  },
  {
    position: 3,
    icon: <FaPython />,
    label: "Python",
    color: DEFAULT_SKILL_YELLOW,
  },
  { position: 4, icon: <FaAws />, label: "AWS", color: DEFAULT_SKILL_ORANGE },
  {
    position: 5,
    icon: <FaReact />,
    label: "React",
    color: DEFAULT_SKILL_BLUE,
  },
  {
    position: 6,
    icon: <RiFlutterFill />,
    label: "Flutter",
    color: DEFAULT_SKILL_GREEN,
  },
];
export const project = [
  {
    title: "My Portfolio",
    shortDescription: "My portfolio website",
    description:
      "This project include my portfolio website. The site has been create with ReactJS. \n For Styles I wanted to use the Material UI",

    link: "https://danielebocchino.github.io/",
    github: "https://github.com/DanieleBocchino/danielebocchino.github.io",
    badges: [badgesList["react"], badgesList["mui"]],
    keywords: ["react", "personal"],
  },
  {
    title: "BPE - Cloud Gaming",
    shortDescription: "Business Process Engineer Exam Project",
    description:
      "In this project I sis an analysis of Cloud Gaming. In particular I assumed a fake Cloud Gaming Company performed and calculated the KPI about it",
    available: [""],
    github: "https://github.com/DanieleBocchino/BPE-Cloud-Gaming/",
    link: "",
    badges: [badgesList["bizagi"], badgesList["e3"], badgesList["aws"]],
    keywords: ["unimi", "aws"],
  },
  {
    title: "BIS - Challenge 2020",
   
    description:  "Exam project of Business Information System - The project is based on the BPI 2020 challenge of the ICPM congress, the goal of the project is Analyzing real-world business process data from BPI 2020 challenge using Disco, PM4Py, and Pandas to identify areas for improvement and propose solutions.",
    available: [""],
    github: "https://github.com/DanieleBocchino/BIS",
    badges: [
      badgesList["python"],
      badgesList["colab"],
      badgesList["pandas"],
      badgesList["pm4py"],
      badgesList["disco"],
    ],
    keywords: ["unimi"],
  },
  {
    title: "Ciuka - Party Game",
    shortDescription: "Mobile application realized in Flutter.",
    description:
      "Mobile application realized in Flutter. it is a basic party game to liven up parties among friends",
    available: [""],
    link: "https://www.b-except.com/ciuka/share.html",
    github: null,
    badges: [badgesList["flutter"], badgesList["mui"], badgesList["firebase"]],
    keywords: ["personal", "flutter"],
  },
  {
    title: "ISLab",
    shortDescription: "Website created for ISLab of University of Milan (VAST)",
    description:
      "During my research collaboration with University of Milan I created a website for ISLab Laboratory.",

    available: [""],
    link: "https://islab.di.unimi.it/",
    github: null,
    badges: [
      badgesList["react"],
      badgesList["js"],
      badgesList["mongo"],
      badgesList["python"],
      badgesList["flask"],
      badgesList["css"],
      badgesList["postman"],
      badgesList["nginx"],
    ],
    keywords: ["personal", "react", "python"],
  },
  {
    title: "Lora Giusta",
    shortDescription: "Website created for a small and lovely B&B in Como",
    description: "",

    available: [""],
    link: "https://lora-giusta.com/",
    github: null,
    badges: [
      badgesList["react"],
      badgesList["js"],
      badgesList["node"],
      badgesList["bulma"],
    ],
    keywords: ["personal", "react"],
  },
  {
    title: "Medilett",
    shortDescription:
      "Platform created for department of philology at  UNIMI (PARLI')",
    description:
      "During my second research collaboration with University of Milan I created a private platform for Philology Department.",

    available: [""],
    link: null,
    github: null,
    badges: [
      badgesList["react"],
      badgesList["js"],
      badgesList["posgresql"],
      badgesList["python"],
      badgesList["flask"],
      badgesList["chakra"],
      badgesList["postman"],
      badgesList["nginx"],
    ],
    keywords: ["personal", "react", "python"],
  },
];
