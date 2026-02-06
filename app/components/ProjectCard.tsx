"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectLink {
  key: string;
  value: string;
}

interface Project {
  imagePath: string;
  title: string;
  year: string;
  description: string;
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="flex flex-col gap-4.5 border-[0.5px] p-3.75 sm:w-63 group hover:shadow-[inset_0_0_0_1px_currentColor] transition-all duration-200"
      whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground-rgb), 0.04)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <img 
        src={project.imagePath} 
        alt={project.title} 
        className="w-full opacity-65 transition-opacity duration-200 group-hover:opacity-90"
      />
      <div className="flex flex-row justify-between">
          <h4 className="font-mono font-bold text-md">{project.title.toUpperCase()}</h4>
          <span className="font-mono text-md">{project.year}</span>
      </div>
      <p className="font-mono grow text-[12px]">{project.description}</p>
      
      {project.links.length > 0 && (
        <div className="flex justify-end gap-3.5">
          {project.links.map((link) => (
            <a
              key={link.key}
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-base underline underline-offset-[20%] decoration-[0.5px]"
            >
              {link.key}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
