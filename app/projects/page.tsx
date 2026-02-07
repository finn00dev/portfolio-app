"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import SubSectionHeader from "../components/SubSectionHeader";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  const [sideProjectsHovered, setSideProjectsHovered] = useState(false);
  const [schoolProjectsHovered, setSchoolProjectsHovered] = useState(false);
  
  const sideProjects = [
    {
      imagePath: "/projects/gatekeepr.png",
      title: "Gatekeepr",
      year: "2025",
      description: "Daily web-based music trivia game, built in Angular and Figma. It has an accumulated playerbase of 500+ returning players",
      links: [
        { key: "live", value: "https://gate-keepr.com" },
        { key: "code", value: "https://github.com/finn00dev/gatekeeper-app" }
      ]
    },
    {
      imagePath: "/projects/imdb.png",
      title: "Imdb Movie Picker",
      year: "2022",
      description: "Web application that recommends films from IMDb’s Top 100 movies list. Built using React.js and open-source datasets",
      links: [
        { key: "live", value: "https://www.top100listpicker.com/" },
      ]
    },
    {
      imagePath: "/projects/together.png",
      title: "Did They Work Together?",
      year: "2018",
      description: "Tool that compares the careers of two celebrities and shows how many movies they costarred in. Built using Angular and public REST APIs",
      links: [
        { key: "live", value: "https://didtheyworktogether.com/" },
        { key: "code", value: "https://github.com/finn00dev/celeb-compare" }
      ]
    }
  ];

  const schoolProjects = [
    {
      imagePath: "/projects/hololens.png",
      title: "Aneurysm AR Visualizer",
      year: "2023",
      description: "Multi-user AR application for HoloLens 2, enabling group interaction of 3D MedicalScans via a localized coordinate system and Azure Spatial Anchors",
      links: [
        { key: "demo", value: "https://www.youtube.com/watch?v=BPGqZ186OqE" },
      ]
    },
    {
      imagePath: "/projects/twitter.png",
      title: "COVID Misinformation Detector",
      year: "2020",
      description: "Twitter bot created in C on a Raspberry Pi that flags misinformation provides resources to help people avoid misinformation",
      links: [
        { key: "live", value: "https://x.com/COVIDFakeNews?cn=ZmxleGlibGVfcmVjcw%3D%3D" },
      ]
    },
  ];

  return (
    <PageTransition>
    <div className="flex flex-col pb-5 gap-5 lg:gap-9">
      <SectionHeader title="Projects" />
      <motion.div 
        className="flex flex-col items-center gap-8 lg:px-5 lg:items-start lg:flex-row lg:gap-10"
        onMouseEnter={() => setSideProjectsHovered(true)}
        onMouseLeave={() => setSideProjectsHovered(false)}
      >
        <div className="w-full max-w-131.25 lg:max-w-none lg:w-76.25">
          <SubSectionHeader title="Side Projects" isActive={sideProjectsHovered}/>
        </div>
        <div className="w-full max-w-131.25 flex flex-col gap-5 sm:flex-row sm:flex-wrap lg:max-w-none lg:w-auto">
          {sideProjects.map((project) => (
            <ProjectCard key={project.title} project={project}/>
          ))}
        </div>
      </motion.div>
      <div className="hidden lg:block">
        <div className="h-[0.5px] bg-current"></div>
      </div>
      <motion.div 
        className="flex flex-col items-center gap-8 lg:px-5 lg:items-start lg:flex-row lg:gap-10"
        onMouseEnter={() => setSchoolProjectsHovered(true)}
        onMouseLeave={() => setSchoolProjectsHovered(false)}
      >
        <div className="w-full max-w-131.25 lg:max-w-none lg:w-76.25">
          <SubSectionHeader title="School Projects" isActive={schoolProjectsHovered}/>
        </div>
        <div className="w-full max-w-131.25 flex flex-col gap-5 sm:flex-row sm:flex-wrap lg:max-w-none lg:w-auto">
          {schoolProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
}
