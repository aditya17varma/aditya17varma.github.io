import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { StaticImageData } from "next/image";

// Snapshots
import golfCV_snapshot from "@/public/snapshots/golfCV_snapshot.png"
import autoIntegrate_snapshot from "@/public/snapshots/autoIntegrate_snapshot.png"
import fedML_snapshot from "@/public/snapshots/fedML_snapshot.png"
import drone_snapshot from "@/public/snapshots/drone_snapshot.jpg"
import autoCloud_snapshot from "@/public/snapshots/autoCloud_snapshot.jpg"
import portfolio_snapshot from "@/public/snapshots/portfolio_snapshot.png"
import hotels_snapshot from "@/public/snapshots/hotels_snapshot.png"

// ML Projects
// GolfCV
import golfCVDistance from "@/public/mlData/golfCV/golfcv_distances_eg.png";
import golfCVImg1 from "@/public/mlData/golfCV/golfcv_eg1.png";
import golfCVImg2 from "@/public/mlData/golfCV/golfcv_eg2.png";
// AutoIntegrate
import autoIntegrateImg from "@/public/mlData/autoIntegrate/autoIntegrate_Poster.jpg";
import autoIntegrateImg2 from "@/public/mlData/autoIntegrate/autoIntegrateData.png";
import autoIntegrateImg3 from "@/public/mlData/autoIntegrate/autoIntegrateConclusion.png";
import autoIntegrateImg4 from "@/public/mlData/autoIntegrate/autoIntegrateDesign.png";
// FedML
import fedMLImg from "@/public/mlData/fedML/fedML.png";

// Distributed Systems Projects
// Drone
import droneImg1 from "@/public/bigData/geospatial/drone_eg1.png";
import droneImg2 from "@/public/bigData/geospatial/drone_eg2.png";

// Cloud Projects
// Auto-Cloud Deployer
import autoCloudImg1 from "@/public/cloudData/dataflow_detailed.jpg";
import autoCloudImg2 from "@/public/cloudData/acid_info_provider.png";
import autoCloudImg3 from "@/public/cloudData/acid.png";
import autoCloudImg4 from "@/public/cloudData/acid_monitor.png";
import autoCloudImg5 from "@/public/cloudData/acid_map_1.png";

// Full-Stack Projects
// Hotels
import hotelsImg1 from "@/public/fullStackData/hotels/HotelInfo.png"
import hotelsImg2 from "@/public/fullStackData/hotels/AddReview.png"
import hotelsImg3 from "@/public/fullStackData/hotels/ModifyReview.png"
import hotelsImg4 from "@/public/fullStackData/hotels/ReviewList.png"


export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  detailedDescription?: string;
  additionalImages?: string[];
  videoUrl?: string;
  githubUrl?: string;
  sponsor?: string;
  sponsorUrl?: string;
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer, KloudDB",
    location: "San Francisco, CA",
    description:
      "Software Engineer at KloudDB, a startup that is building Postgres Monitoring and Security Solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Graduate School",
    location: "University of San Francisco",
    description:
      "I graduated with a Master's in Computer Science, with a 3.9 GPA. The USF CS Bridge program allowed me to transition into tech from a legal background.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Teaching Assistant & Tutor",
    location: "University of San Francisco",
    description:
      "I worked as a TA for the Machine Learning and AI classes. I also tutored USF student-athletes in Computer Science.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "SWE Intern",
    location: "Openprise",
    description:
      "My team built the Auto-Cloud Deployer tool, during the summer of 2022. Worked with Mario Lim at Openprise.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Associate",
    location: "Mandala Law Offices, India",
    description:
      "First year associate at Mandala Law Offices, a boutique law firm in India, specializing in corporate law.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Law School",
    location: "O.P. Jindal Global University, India",
    description:
      "I graduated with a Bachelor of Laws (LL.B., equivalent to JD) with a 3.8 GPA from one of India's top law schools.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Legal Assistant",
    location: "Law Offices of Jonathan Ricasa, Los Angeles",
    description:
      "I helped with legal research, and drafting for a boutique law practice specializing in Class Action and Collective Action lawsuits.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2017",
  },
  {
    title: "College",
    location: "University of California, Los Angeles",
    description:
      "I graduated with a Bachelor of Arts in History, with a focus on Roman and Byzantine history.",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2016",
  },
] as const;

export const MLProjectsData: ProjectType[] = [
  {
    title: "Golf Swing Analyzer",
    description:
      "Used Neural Networks, Computer Vision, and a custom KNN algorithm to detect and compare golf-swings.",
    tags: ["Python", "PyTorch", "MediaPipe", "OpenCV", "Neural Networks", "KNN"],
    imageUrl: golfCV_snapshot,
    detailedDescription:
      "A project that combines my passions of sports and tech!\n\n\
      I used a CNN to detect the 8 key positions of a golf swing (Address, top of backswing, impact, finish, etc.).\n\n\
      I then leveraged Google's Mediapipe library and OpenCV to detect pose landmarks. These pose-landmarks were used to compare golf-swings using a custom KNN algorithm to provide and present classification to the user.",
    additionalImages: [golfCVDistance.src, golfCVImg1.src, golfCVImg2.src],
    videoUrl: "./mlData/golfCV/golfcv_demo.mp4",
    githubUrl: "https://github.com/aditya17varma/GolfSwingAnalyzer",
  },
  {
    title: "Auto-Integrate",
    description:
      "Integrate data from multiple sources and applications using custom built GPT-4 multi-agent framework. (Sponsored by ObjectEdge)",
    tags: ["Python", "GPT-4", "Autogen", "OpenAI", "Llama-2", "LLM"],
    imageUrl: autoIntegrate_snapshot,
    detailedDescription:
      "A tool to auto-integrate data from multiple applications by using the Large Language Models (LLM) from OpenAI, Microsoft, and Meta.\n\n\
      We built a custom GPT-4 multi-model conversational framework to the process of data integration.\n\n\
      We use the multi-model framework to gather API data information and then map data fields. We then set up integration pipelines to automate the process of data integration.\n\n\
      We conducted R&D with different LLMs and deployments, locally installed LLMs from Hugging-Face using LangChain vs remote APIs and prompt-engineering to improve the accuracy of the responses.\n\n\
      GPT-4 was the best performing LLM. Consistently gave us reliable mappings with minimal hallucinations, and in the required format.\n\
      Using a multi-agent framework further increased reliability and allowed us to generate output formats with greater complexity, which made generating the integration pipelines easier.\n\n\
      (Open image in new tab to view full size)",
    additionalImages: [autoIntegrateImg.src, autoIntegrateImg2.src, autoIntegrateImg3.src, autoIntegrateImg4.src],
    sponsor: "ObjectEdge",
    sponsorUrl: "https://www.objectedge.com",
  }
  ,
  {
    title: "Federated Machine Learning",
    description:
      "Machine learning model that trains on data from multiple sources without sharing the data.",
    tags: ["Python", "Rust", "Machine Learning", "Distributed Systems", "Protobuf"],
    imageUrl: fedML_snapshot,
    detailedDescription:
      "This is a Federated Machine Learning system that uses a Central Coordinator and has learner nodes which are Mutex/Blocking.\n\n\
      The learner nodes will train the model one after one another, with the Central Coordinator broadcasting the most up-to-date model back to the learner nodes for the next iteration.\n\n\
      On the MNIST dataset, we are getting accuracy that is within 3% of a consolidated model.",
    additionalImages: [fedMLImg.src],
    githubUrl: "https://github.com/de-learn"
  },
] as const;

export const bigDataProjectsData: ProjectType[] = [
  {
    title: "Geospatial Tracking and Resource Allocation",
    description:
      "Geospatial tracking of drones and resource allocation of charging using different policies.",
    tags: ["Go", "Protobuf", "Distributed Systems", "Machine Learning"],
    imageUrl: drone_snapshot,
    detailedDescription:
      "I investigated the use of geospatial tracking using distributed systems concepts to track drones.\n\n\
      I also looked at resource allocation using different policies, I was trying to allocate a limited number of charging spots at 2 hubs to multiple drones.\n\
      Some of the policies I looked at were: Shortest-Distance, Lowest-Battery, and Exepecation Maximization.\n\n\
      The ML Exepecation Maximization policy was the best performing policy, as it was able to adapt to a dynamic environment and allocate charging hubs by minimizaing downtime.\n\n\
      I set this up as a simulation using Go and Protobuf to communicate state between the drones, charging hubs, and the central planner. Making it easy to add and test additional policies, as well as scale the simulation to a larger number of drones and hubs.",
    additionalImages: [droneImg1.src, droneImg2.src],
    videoUrl: "./bigData/geospatial/drone_demo.mp4",
    githubUrl: "https://github.com/aditya17varma/Geospatial",
  },
] as const;

export const cloudProjectsData: ProjectType[] = [
  {
    title: "Auto-Cloud Deployer",
    description:
      "Automating the deployment of application to cloud service providers.",
    tags: ["TypeScript", "Docker", "Google GCP", "Microsoft Azure"],
    imageUrl: autoCloud_snapshot,
    detailedDescription:
      "A tool to automate deploying applications to cloud service providers, support for AWS EB2, Google Cloud Run GCP, Azure Container Instances.\n\n\
      We cut the time taken by 75-80% and the number of steps taken to 2: providing a config file, and selecting a cloud service provider.\n\n\
      We developed a custom mapping language to make the application provider agnostic, by using our config format, the user can deploy to any cloud service provider.\n\n\
      We also allowed the user to monitor any applications that were deployed using our application.",
    additionalImages: [autoCloudImg1.src, autoCloudImg2.src, autoCloudImg3.src, autoCloudImg4.src, autoCloudImg5.src],
    sponsor: "Openprise",
    sponsorUrl: "https://www.openprisetech.com"
  }
] as const;

export const fullStackProjectsData: ProjectType[] = [
  {
    title: "Portfolio",
    description:
      "This website!",
    tags: ["React", "Next.JS", "Tailwind CSS", "TypeScript", "Framer Motion"],
    imageUrl: portfolio_snapshot,
    detailedDescription:
    "A portfolio webiste to showcase my projects, skills, and a brief introduction about myself. This replaced an earlier portfolio website I built using base HTML and CSS. Building with React and Tailwind helped me make a more complex site but also increase consistency across it.\n\n\
    Built primarily using React, NextJS, TypeScript, and TailwindCSS. I also used Framer Motion to add animation and transitions to improve the user experience, as well as incorporating email contact. Hosting on Vercel allowed me to serve a non-static webpage, and make use of NextJS's Server Actions to optimize load times.\n\n\
    I used the concepts learnt in my full-stack web development class combined with some videos from the YouTuber ByteGrad (https://www.youtube.com/@ByteGrad) to build this site.",
    githubUrl: "https://github.com/aditya17varma/aditya17varma.github.io"
  },
  {
    title: "Hotels.com",
    description:
      "A Hotels.com full-stack application. With a frontend and backend built in Java, and connected to a MySQL database.",
    tags: ["Java", "Bootstrap", "MySQL", "HTML", "Templates", "Servlets", "JavaScript"],
    imageUrl: hotels_snapshot,
    detailedDescription:
    "Full-stack website with a multi-threaded server using Java and Jetty servlets, database management using JDBC and web pages with dynamic elements.\n\n\
    Dynamic elements of the webpage are created using JavaScript and AJAX, to load map location for Hotels and provide real time weather data at the hotel location.\n\n\
    A login/logout page as well as session tracking to maintain login status was implemented. CRUD operations are supported for reviews.\n\n\
    Hotel ratings were dynamically updated upon addition of a new review.",
    additionalImages: [hotelsImg1.src, hotelsImg2.src, hotelsImg3.src, hotelsImg4.src],
    githubUrl: "https://github.com/aditya17varma/Hotel.com-Clone" 
  }
]

export const skillsData = [
  "Python",
  "Go",
  "Java",
  "C/C++",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MySQL",
  "Risc-V",
  "Assembly",
  

] as const;

export const skillsLanguages = [
  "Python",
  "Go",
  "Java",
  "C/C++",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MySQL",
  "Risc-V",
  "Assembly",
  "Git",
] as const;

export const skillsTools = [
  "Git",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "Node.js",
  "HTML",
  "CSS",
  "Digital Design",
  "Scikit Learn", 
  "PyTorch", 
  "TensorFlow", 
  "XGBoost", 
  "Spark", 
  "Hadoop", 
  "Protobuf",
  "Mediapipe", 
  "OpenCV", 
  "Docker",
  "Agile Development",
  "Google GCP", 
  "Microsoft Azure",
] as const;