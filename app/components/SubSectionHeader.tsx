"use client";

import { motion } from "framer-motion";

interface SubSectionHeaderProps {
  title: string;
  icon?: string;
  isActive?: boolean;
}

export default function SubSectionHeader({ title, icon, isActive = false }: SubSectionHeaderProps) {
  return (
    <motion.div 
      className="w-full h-20 px-4 py-3 flex justify-end items-end border border-current rounded-[15px] sm:h-21.75 xl:h-25.25"
      animate={{
        backgroundColor: isActive ? "var(--foreground)" : "transparent",
        color: isActive ? "var(--background)" : "var(--foreground)",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
        <div className="flex gap-5">
            <h3 className="font-mono font-bold italic text-right text-xl sm:text-2xl">{title.toUpperCase()}</h3>
            {icon && <img 
              src={icon} 
              alt="icon" 
              className="w-6"
              style={{ filter: isActive ? "invert(1)" : "none" }}
            />}
        </div>
        
    </motion.div>
  );
}
