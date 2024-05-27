import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { StaticImageData } from "next/image";

// ML Projects
// GolfCV
import golfCVDistance from "@/public/mlData/golfCV/golfcv_distances_eg.png";
import golfCVImg1 from "@/public/mlData/golfCV/golfcv_eg1.png";
import golfCVImg2 from "@/public/mlData/golfCV/golfcv_eg2.png";

export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  detailedDescription?: string;
  additionalImages?: string[];
  videoUrl?: string;
  githubUrl?: string;
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const MLProjectsData: ProjectType[] = [
  {
    title: "Golf Swing Analyzer",
    description:
      "Used Neural Networks, Computer Vision, and a custom KNN algorithm to detect and compare golf-swings.",
    tags: ["Python", "PyTorch", "MediaPipe", "OpenCV", "Neural Networks", "KNN"],
    imageUrl: corpcommentImg,
    detailedDescription:
      "A project that combines my passions of sports and tech!\n\n\
      I used a CNN to detect the 8 key positions of a golf swing (Address, top of backswing, impact, finish, etc.).\n\n\
      I then leveraged Google's Mediapipe library and OpenCV to detect pose landmarks. These pose-landmarks were used to compare golf-swings using a custom KNN algorithm to provide and present classification to the user.",
    additionalImages: [golfCVDistance.src, golfCVImg1.src, golfCVImg2.src],
    videoUrl: "/mlData/golfCV/golfcv_demo.mp4",
    githubUrl: "https://github.com/aditya17varma/GolfSwingAnalyzer",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    detailedDescription:
      "This project was created to help golfers improve their swing. It uses a webcam to record the golfer's swing. The video is then processed by a custom KNN algorithm to detect the swing. The swing is then compared to a database of professional golfers' swings.",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    detailedDescription:
      "This project was created to help golfers improve their swing. It uses a webcam to record the golfer's swing. The video is then processed by a custom KNN algorithm to detect the swing. The swing is then compared to a database of professional golfers' swings.",
  },
] as const;

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