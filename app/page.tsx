"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-58px)] flex flex-col sm:h-[calc(100vh-80px)] overflow-hidden">
      <motion.div 
        className="w-full flex-1 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img src="/hero/hero-sm.jpg" alt="Hero" className="object-cover h-full w-full lg:hidden" />
        <img src="/hero/hero-lg.jpg" alt="Hero" className="object-cover h-full w-full hidden lg:block" />
      </motion.div>
      <motion.h3 
        className="font-mono font-bold text-[10px] leading-13 sm:text-[14px] sm:mb-2.5 lg:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        Software Developer & Design Technologist
      </motion.h3>
    </div>
  );
}
