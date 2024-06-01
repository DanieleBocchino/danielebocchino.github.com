import { Biotech, LaptopMac, SchoolOutlined, TerminalOutlined } from "@mui/icons-material";

import React from "react";

export const experiences = [
  {
    place: "SGR Compliance",
    title: "Software Development Specialist",
    shortDescription: "PROJECT LEAD FOR INNOVATIVE SGR COMPLIANCE SOLUTIONS",
    description: "As a Project Lead, I plan, manage, and create infrastructure and development for a disruptive SGR compliance project, leveraging Terraform, AWS services, and a full stack technology suite that includes React, Java, Docker, and Kubernetes.",
    date: "Jun. 2024 - Present ",
    icon: <TerminalOutlined />,
    main_skills: ["Terraform", "AWS", "React", "Typescript","Python", "Java", "Docker", "Kubernetes", "Kafka"],
    color: "warning",
    link: "https://www.sgrcompliance.com/",
  },
  {
    place: "SGR Compliance",
    title: "Junior Software Development Specialist",
    shortDescription:
      "FULL STACK DEVELOPMENT WEB AND MOBILE SOLUTIONS",
    description: "As a Junior Software Development Specialist, I supported my team lead in full stack development using React in TypeScript, Ruby on Rails, Docker, Python, and AWS services. Additionally, I independently managed a small development project for a mobile app in Flutter, which included implementing ML technologies using TensorFlow Lite and ML Kit",
    date: "Jun. 2023 - Present ",
    main_skills: ["React", "Ruby on Rails", "Docker", "Python", "AWS", "Typescript", "Flutter", "TensorFlow"],
    icon: <TerminalOutlined />,
    color: "warning",
    link: "https://www.sgrcompliance.com/",
  },
  {
    place: "Università degli Studi di Milano",
    title: "Internship trainee - Master's Degree",
    shortDescription: "THESIS BASED ON AUDIO-VISUAL ATTENTION MODELING VIA REINFORCEMENT LEARNING",
    description: "This thesis explores using reinforcement learning for audio-visual attention modeling. It focuses on human vision mechanisms, emphasizing audio-visual cues for better human-machine interaction. Applications include autonomous driving, image/video compression, and robotics, addressing attention allocation as a balance between specific area focus (exploitation) and environmental context (exploration).",
    date: "Nov. 2022 - Jul. 2023 ",
    main_skills: ["Python", "TensorFlow", "OpenCV", "Reinforcement Learning", "pandas", "numpy"],
    icon: <SchoolOutlined />,
    color: "info",
    link: "https://www.unimi.it/en/education/computer-science-master",
  },
  {
    place: "Home",
    title: "Freelancer",
    shortDescription: "CREATE WEBSITES AND MOBILE APPLICATIONS",
    description: "Developed websites and mobile applications including <a href='https://lora-giusta.com/'> Loragiusta</a>,  \"Ciuka - Party App,\" and <a href='https://danielebocchino.github.io/'> My Portfolio</a> using React, Node.js, Python, and Flutter.",
    date: "Jul. 2022 - Present ",
    main_skills: ["React", "Flutter", "Node.js", "Python", "javascript", "html", "css"],
    icon: <LaptopMac />,
    color: "warning",
    link: "/",
  },
  {
    place: "Università degli Studi di Milano",
    title: "Research Collaborator",
    shortDescription: 'DEVELOP MIUR PROJECT - PRIN 2017 “ATLANTE PROSOPOGRAFICO DELLE LETTERATURE ROMANZE MEDIEVALI (XII-XIII SEC.)"',
    description: "Won a public challenge at UNIMI and worked on the MIUR project to create a simplified data entry interface with geolocation functionality. This research supports the publication of the Prosopographical Atlas of the Romance Literatures site (PARLi) using Python, Flask, React, and PostgreSQL.",
    date: "Aug. 2021 - Mar. 2022 ",
    main_skills: ["Python", "Flask", "React", "PostgreSQL", "Nginx", "javascript"],
    icon: <Biotech />,
    color: "success",
    link:
      "https://www.unimi.it/it/ateneo/lavora-con-noi/consulenze-e-collaborazioni/avvisi-pubblici-di-consulenza-e-collaborazione/supporto-alla-ricerca-progetto-prin-2017-atlante-prosopografico-delle-letterature-romanze-medievali",
  },
  {
    place: "Università degli Studi di Milano",
    title: "Research Collaborator",
    shortDescription: "WEB APPLICATION DEVELOPMENT FOR VAST PROJECT",
    description: "Participated in a public challenge at UNIMI, working as a research collaborator. Developed a web application using relational technologies for dynamic management of news and events related to the VAST project and ISLab group activities. Additionally, created a web application for asset inventory of research products related to the VAST project. Over that I've relized <a href='https://https://islab.di.unimi.it/'>ISlab</a> website using React, Node.js, MongoDB and Nginx.",
    date: "Jun. 2021 - Nov. 2021 ",
    icon: <Biotech />,
    main_skills: ["React", "Node.js", "MongoDB", "Nginx", "javascript"],
    color: "success",
    link:
      "https://www.unimi.it/it/ateneo/lavora-con-noi/consulenze-e-collaborazioni/avvisi-pubblici-di-consulenza-e-collaborazione/supporto-alla-ricerca-progetto-values-across-space-and-time-vast",
  },
  {
    place: "Università degli Studi di Milano",
    title: "Internship trainee - Bachelor's Degree",
    shortDescription:
      "DESIGN AND DEVELOPMENT OF A WEB APPLICATION USED TO ANALYZE AND STORE TEXTUAL DOCUMENTS.",
    description: "The internship was conducted at the ISLab (Information Systems and Knowledge Management) laboratory of the Department of Computer Science, University of Milan. Developed a web application to analyze and store textual documents in JSON format. The application supports user registration and management of multiple projects, allowing the insertion of an arbitrary number of files. Various types of text analysis can be applied to these files using an in-house developed NLP library. The analysis results are displayed on an interactive screen, enabling detailed examination of the operations' outcomes.",
    date: "Sept. 2020 - Feb. 2021 ",
    icon: <SchoolOutlined />,
    main_skills: ["Python", "Flask", "React", "MongoDB", "javascript"],
    color: "info",
    link: "https://www.unimi.it/en/education/computer-science-master",
  },
];


export const hardSkills = [
  {
    skill: "python",
    value: 4.5,
    icon: "/images/skills/python.png",
  },
  {
    skill: "java",
    value: 3.5,
    icon: "/images/skills/java.png",
  },
  {
    skill: "javascript",
    value: 4,
    icon: "/images/skills/js.png",
  },
  {
    skill: "dart",
    value: 4,
    icon: "/images/skills/dart.png",
  },
  {
    skill: "typescript",
    value: 3.5,
    icon: "/images/skills/ts.png",
  },
  {
    skill: "html",
    value: 4,
    icon: "/images/skills/html.png",
  },
  {
    skill: "css",
    value: 4,
    icon: "/images/skills/css.png",
  },
  {
    skill: "flutter",
    value: 4.5,
    icon: "/images/skills/flutter.png",
  },
  {
    skill: "react",
    value: 4.5,
    icon: "/images/skills/react.png",
  },
  {
    skill: "git",
    value: 3.5,
    icon: "/images/skills/git.png",
  },
  {
    skill: "mongodb",
    value: 3.5,
    icon: "/images/skills/mongo.png",
  },
  {
    skill: "sql",
    value: 3.5,
    icon: "/images/skills/postgres.png",
  },
  {
    skill: "postgresql",
    value: 3.5,
    icon: "/images/skills/postgres.png",
  },
  {
    skill: "mysql",
    value: 3.5,
    icon: "/images/skills/mysql.png",
  },
  {
    skill: "aws",
    value: 4,
    icon: "/images/skills/aws.png",
  },
  {
    skill: "docker",
    value: 3.5,
    icon: "/images/skills/docker.png",
  },
  {
    skill: "kubernetes",
    value: 3.5,
    icon: "/images/skills/kubernetes.png",
  },
  {
    skill: "kafka",
    value: 3.5,
    icon: "/images/skills/kafka.png",
  },
  {
    skill: "terraform",
    value: 3.5,
    icon: "/images/skills/terraform.png",
  },
  {
    skill: "ci/cd",
    value: 3.5,
    icon: "/images/skills/cicd.png",
  },
  {
    skill: "machine learning",
    value: 3.5,
    icon: "/images/skills/ml.png",
  },
  {
    skill: "data science",
    value: 3.5,
    icon: "/images/skills/ds.png",
  },
  {
    skill: "reinforcement learning",
    value: 3.5,
    icon: "/images/skills/ml.png",
  },
  {
    skill: "flask",
    value: 3.5,
    icon: "/images/skills/flask.png",
  },
  {
    skill: "node.js",
    value: 3.5,
    icon: "/images/skills/node.png",
  },
  {
    skill: "express.js",
    value: 3.5,
    icon: "/images/skills/express.png",
  },
  {
    skill: "python",
    value: 4.5,
    icon: "/images/skills/python.png",
  },
  {
    skill: "java",
    value: 3.5,
    icon: "/images/skills/java.png",
  },
  {
    skill: "javascript",
    value: 4,
    icon: "/images/skills/js.png",
  },
  {
    skill: "dart",
    value: 4,
    icon: "/images/skills/dart.png",
  },
  {
    skill: "typescript",
    value: 3.5,
    icon: "/images/skills/ts.png",
  },
  { skill: "ruby on rails", value: 3.5, icon: "/images/skills/ruby.png" },
  { skill: "openCV", value: 3.5, icon: "/images/skills/opencv.png" },
  {skill: "TensorFlow", value: 3.5, icon: "/images/skills/tf.png"},
];
