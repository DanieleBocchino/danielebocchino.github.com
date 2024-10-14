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

export const projects_test = [
  {
    name: "Ciuka - Party Game",
    description:
      "Mobile application realized in Flutter. it is a basic party game to liven up parties among friends",
    link: "https://www.b-except.com/ciuka/share.html",
    topics: ["flutter", "material-ui", "firebase"],
    private: true,
  },
  {
    name: "ISLab",
    description:
      "Website created for ISLab of University of Milan (VAST). During my research collaboration with University of Milan I created a website for ISLab Laboratory.",

    link: "https://islab.di.unimi.it/",
    topics: [
      "react",
      "javascript",
      "mongo",
      "python",
      "flask",
      "css",
      "postman",
      "nginx",
    ],
    private: true,
  },
  {
    name: "Lora Giusta",
    description: "Website created for a small and lovely B&B in Como",
    link: "https://lora-giusta.com/",
    topics: ["react", "js", "node", "bulma"],
    private: true,
  },
  {
    name: "Medilett",
    description:
      "During my second research collaboration with University of Milan I created a private platform for Philology Department.",
    topics: [
      "react",
      "javascript",
      "posgresql",
      "python",
      "flask",
      "chakra",
      "postman",
      "nginx",
    ],

    private: true,
  },
];

export const projects_mock = [
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
  {
    name: "",
    description: "",
    link: "",
    topics: [],
    private: null,
  },
];

export const tabs = [
  {
    position: 0,
    icon: <DiGitBranch />,
    label: "All",
    value: "",
    color: DEFAULT_SKILL_TEAL,
  },
  {
    position: 1,
    icon: <FaUniversity />,
    label: "Unimi",
    value: "unimi",
    color: DEFAULT_SKILL_PURPLE,
  },
  {
    position: 2,
    icon: <FaLaptopCode />,
    label: "Personal",
    value: "personal",
    color: DEFAULT_SKILL_RED,
  },
  {
    position: 3,
    icon: <FaPython />,
    label: "Python",
    value: "python",
    color: DEFAULT_SKILL_YELLOW,
  },
  {
    position: 4,
    icon: <FaAws />,
    label: "AWS",
    value: "aws",
    color: DEFAULT_SKILL_ORANGE,
  },
  {
    position: 5,
    icon: <FaReact />,
    label: "React",
    value: "react",
    color: DEFAULT_SKILL_BLUE,
  },
  {
    position: 6,
    icon: <RiFlutterFill />,
    label: "Flutter",
    value: "flutter",
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

    description:
      "Exam project of Business Information System - The project is based on the BPI 2020 challenge of the ICPM congress, the goal of the project is Analyzing real-world business process data from BPI 2020 challenge using Disco, PM4Py, and Pandas to identify areas for improvement and propose solutions.",
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
