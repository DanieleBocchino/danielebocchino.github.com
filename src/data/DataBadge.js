import React from "react";

export const create_badge = (badge) => {
  if (badge) {
    return (
      <a href={badge.link} target="_blank">
        <img
          alt={badge.name}
          src={`https://img.shields.io/badge/${badge.name}-100000?style=flat&logo=${badge.icon}&logoColor=FFFFFF&labelColor=424242&color=${badge.color}`}
        />
      </a>
    );
  } else {
    return null;
  }
};

export const badgesList = {
  react: {
    icon: "React",
    name: "React",
    color: "61DAFB",
    link: "https://reactjs.org/",
  },
  "machine-learning": {
    icon: "probot",
    name: "Machine Learning",
    color: "00B0D8",
    link: "",
  },
  mui: {
    icon: "MUI",
    name: "MUI",
    color: "007FFF",
    link: "https://mui.com/",
  },
  python: {
    icon: "python",
    name: "Python",
    color: "FFF300",
    link: "https://www.python.org/",
  },
  flask: {
    icon: "flask",
    name: "Flask",
    color: "000000",
    link: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  mongo: {
    icon: "mongodb",
    name: "MongoDB",
    color: "47A248",
    link: "https://www.mongodb.com/",
  },
  css: {
    icon: "css3",
    name: "CSS3",
    color: "1572B6",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  javascript: {
    icon: "javascript",
    name: "Javascript",
    color: "F7DF1E",
    link: "https://www.javascript.com/",
  },
  postman: {
    icon: "postman",
    name: "Postman",
    color: "FF6C37",
    link: "https://www.postman.com/",
  },
  nginx: {
    icon: "nginx",
    name: "Nginx",
    color: "269539",
    link: "https://www.nginx.com/",
  },
  chakra: {
    icon: "chakra-ui",
    name: "Chakra UI",
    color: "319795",
    link: "https://chakra-ui.com/",
  },
  node: {
    icon: "node.js",
    name: "Node.js",
    color: "339933",
    link: "https://nodejs.org/en/",
  },
  bulma: {
    icon: "bulma",
    name: "Bulma",
    color: "00D1B2",
    link: "https://bulma.io/",
  },
  firebase: {
    icon: "firebase",
    name: "Firebase",
    color: "FFCA28",
    link: "https://firebase.google.com/",
  },
  flutter: {
    icon: "flutter",
    name: "Flutter",
    color: "02569B",
    link: "https://flutter.dev/",
  },
  postgresql: {
    icon: "postgresql",
    name: "PostgreSQL",
    color: "336791",
    link: "https://www.postgresql.org/",
  },
  heroku: {
    icon: "heroku",
    name: "Heroku",
    color: "430098",
    link: "https://www.heroku.com/",
  },
  html: {
    icon: "html5",
    name: "HTML5",
    color: "E34F26",
    link: "https://html.spec.whatwg.org/multipage/",
  },
  git: {
    icon: "git",
    name: "Git",
    color: "F05032",
    link: "https://git-scm.com/",
  },
  github: {
    icon: "github",
    name: "Github",
    color: "181717",
    link: "",
  },
  gitlab: {
    icon: "gitlab",
    name: "Gitlab",
    color: "FCA121",
    link: "https://about.gitlab.com/",
  },
  docker: {
    icon: "docker",
    name: "Docker",
    color: "2496ED",
    link: "https://www.docker.com/",
  },
  linux: {
    icon: "linux",
    name: "Linux",
    color: "FCC624",
    link: "https://www.linux.org/",
  },
  typescript: {
    icon: "typescript",
    name: "Typescript",
    color: "3178C6",
    link: "https://www.typescriptlang.org/",
  },
  html: {
    icon: "html5",
    name: "HTML5",
    color: "E34F26",
    link: "https://html.spec.whatwg.org/multipage/",
  },
  e3value: {
    icon: "e3",
    name: "E3Value",
    color: "E73D2F",
    link: "https://e3value.com/",
  },

  bizagi: {
    icon: "bizagi",
    name: "Bizagi",
    color: "0C7968",
    link: "https://www.bizagi.com/",
  },
  colab: {
    icon: "google colab",
    name: "Google Colab",
    color: "F9AB00",
    link: "https://colab.research.google.com/",
  },
  postgresql: {
    icon: "postgresql",
    name: "PostgreSQL",
    color: "336791",
    link: "https://www.postgresql.org/",
  },
  pandas: {
    icon: "pandas",
    name: "Pandas",
    color: "150458",
    link: "https://pandas.pydata.org/",
  },
  scipy: {  
    icon: "scipy",
    name: "Scipy",
    color: "8CAAE6",
    link: "https://www.scipy.org/",
  },
  plotly: {
    icon: "plotly",
    name: "Plotly",
    color: "3F4F75",
    link: "https://plotly.com/",
  },

  

  numpy: {
    icon: "numpy",
    name: "Numpy",
    color: "013243",
    link: "https://numpy.org/",
  },
  matplotlib: {
    icon: "LOT Polish Airlines",
    name: "Matplotlib",
    color: "3776AB",
    link: "https://matplotlib.org/",
  },
  seaborn: {
    icon: "seaborn",
    name: "Seaborn",
    color: "3776AB",
    link: "https://seaborn.pydata.org/",
  },
  scikit: {
    icon: "scikit-learn",
    name: "Scikit-learn",
    color: "F7931E",
    link: "https://scikit-learn.org/stable/",
  },
  tensorflow: {
    icon: "tensorflow",
    name: "Tensorflow",
    color: "FF6F00",
    link: "https://www.tensorflow.org/",
  },
  keras: {
    icon: "keras",
    name: "Keras",
    color: "D00000",
    link: "https://keras.io/",
  },
  pytorch: {
    icon: "pytorch",
    name: "Pytorch",
    color: "EE4C2C",
    link: "https://pytorch.org/",
  },
  jupyter: {
    icon: "jupyter",
    name: "Jupyter",
    color: "F37626",
    link: "https://jupyter.org/",
  },
  anaconda: {
    icon: "anaconda",
    name: "Anaconda",
    color: "44A833",
    link: "https://www.anaconda.com/",
  },
  pycharm: {
    icon: "pycharm",
    name: "Pycharm",
    color: "000000",
    link: "https://www.jetbrains.com/pycharm/",
  },
  vscode: {
    icon: "visual-studio-code",
    name: "Visual Studio Code",
    color: "007ACC",
    link: "https://code.visualstudio.com/",
  },
  pm4py: {
    icon: "pm4py",
    name: "PM4Py",
    color: "FF4F64",
    link: "https://pm4py.fit.fraunhofer.de/",
  },
  disco: { icon: "Discogs", name: "Disco", color: "2E9FFF", link: "" },
  assembly: { icon: "AssemblyScript", name: "Assembly", color: "007AAC", link: "" },
  logisim: {
    icon: "Temporal",
    name: "Logisim",
    color: "005571",
    link: "http://www.cburch.com/logisim/",
  },
  ibm: {
    icon: "ibm",
    name: "IBM",
    color: "00599C",
    link: "https://www.ibm.com/",
  },
  react: {
    icon: "react",
    name: "React",
    color: "61DAFB",
    link: "https://reactjs.org/",
  },
  redux: {
    icon: "redux",
    name: "Redux",
    color: "764ABC",
    link: "https://redux.js.org/",
  },
  aws: {
    icon: "amazonaws",
    name: "AWS",
    color: "232F3E",
    link: "https://aws.amazon.com/",
  },
  "aws-s3": {
    icon: "amazon-s3",
    name: "AWS S3",
    color: "569A31",
    link: "https://aws.amazon.com/s3/",
  },
  "aws-lambda": {
    icon: "aws lambda",
    name: "AWS Lambda",
    color: "FF9900",
    link: "https://aws.amazon.com/lambda/",
  },
  "aws-dynamodb": {
    icon: "Amazon DynamoDB",
    name: "AWS DynamoDB",
    color: "4053D6",
    link: "https://aws.amazon.com/dynamodb/",
  },
  "aws-api-gateway": {
    icon: "Amazon API Gateway",
    name: "AWS API Gateway",
    color: "FF4F8B",
    link: "https://aws.amazon.com/api-gateway/",
  },
  "aws-cloudfront": {
    icon: "amazonaws",
    name: "AWS CloudFront",
    color: "232F3E",
    link: "https://aws.amazon.com/cloudfront/",
  },
  "aws-iam": {
    icon: "amazonaws",
    name: "AWS IAM",
    color: "232F3E",
    link: "https://aws.amazon.com/iam/",
  },
  "aws-cognito": {
    icon: "amazonaws",
    name: "AWS Cognito",
    color: "232F3E",
    link: "https://aws.amazon.com/cognito/",
  },
  "aws-sns": {
    icon: "Amazon SNS",
    name: "AWS SNS",
    color: "FF4F8B",
    link: "https://aws.amazon.com/sns/",
  },
  "aws-sqs": {
    icon: "Amazon SQS",
    name: "AWS SQS",
    color: "FF4F8B",
    link: "https://aws.amazon.com/sqs/",
  },
  "aws-cloudwatch": {
    icon: "Amazon CloudWatch",
    name: "AWS CloudWatch",
    color: "FF4F8B",
    link: "https://aws.amazon.com/cloudwatch/",
  },
  "aws-ec2": {
    icon: "Amazon EC2",
    name: "AWS EC2",
    color: "FF9900",
    link: "https://aws.amazon.com/ec2/",
  },
  "aws-ecs": {
    icon: "Amazon ECS",
    name: "AWS ECS",
    color: "FF9900",
    link: "https://aws.amazon.com/ecs/",
  },
  "aws-eks": {
    icon: "Amazon EKS",
    name: "AWS EKS",
    color: "FF9900",
    link: "https://aws.amazon.com/ecs/",
  },
  "aws-elastic-beanstalk": {
    icon: "amazonaws",
    name: "AWS Elastic Beanstalk",
    color: "232F3E",
    link: "https://aws.amazon.com/elasticbeanstalk/",
  },
  "aws-elasticache": {
    icon: "amazonaws",
    name: "AWS ElastiCache",
    color: "232F3E",
    link: "https://aws.amazon.com/elasticache/",
  },
  "aws-rds": {
    icon: "amazonaws",
    name: "AWS RDS",
    color: "232F3E",
    link: "https://aws.amazon.com/rds/",
  },
  "aws-route53": {
    icon: "amazonaws",
    name: "AWS Route53",
    color: "232F3E",
    link: "https://aws.amazon.com/route53/",
  },
  "aws-ses": {
    icon: "amazonaws",
    name: "AWS SES",
    color: "232F3E",
    link: "https://aws.amazon.com/ses/",
  },
  "aws-swf": {
    icon: "amazonaws",
    name: "AWS SWF",
    color: "232F3E",
    link: "https://aws.amazon.com/swf/",
  },
  "aws-rds": {
    icon: "Amazon RDS",
    name: "AWS RDS",
    color: "527FFF",
    link: "https://aws.amazon.com/rds/",
  },
  "aws-amplify": {
    icon: "AWS Amplify",
    name: "AWS Amplify",
    color: "FF9900",
    link: "https://aws.amazon.com/amplify/",
  },
};
