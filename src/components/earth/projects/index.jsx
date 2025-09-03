"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles/index";
import Descriptions from "./descriptions/index";

const data = [
  {
    title: "Next.js",
    description:
      "Building modern, high-performance web apps with a focus on seamless user experiences.",
    speed: 0.5,
  },
  {
    title: "GSAP",
    description:
      "Creating smooth, dynamic animations to bring web interfaces to life.",
    speed: 0.5,
  },
  {
    title: "Framer Motion",
    description:
      "Designing interactive and fluid UI animations that enhance usability and engagement.",
    speed: 0.67,
  },
  {
    title: "Tailwind CSS",
    description:
      "Developing clean, responsive layouts quickly using utility-first CSS framework.",
    speed: 0.8,
  },
  {
    title: "Node.js",
    description:
      "Building scalable server-side applications and APIs with efficient performance.",
    speed: 0.8,
  },
  {
    title: "Prisma",
    description:
      "Managing databases effortlessly and writing type-safe queries for robust applications.",
    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
