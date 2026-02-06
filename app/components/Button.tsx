"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  href: string;
}

export default function Button({ label, href }: ButtonProps) {
  return (
    <motion.a 
      href={href}
      className="w-fit font-sans px-3.75 py-2.5 text-[14px] border border-current block text-center [box-shadow:3px_3px_0px_0px_currentColor] sm:text-lg lg:text-xl"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.a>
  );
}
