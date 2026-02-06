"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  const links = [
    { href: "/about", label: "about" },
    { href: "/skills", label: "skills" },
    { href: "/projects", label: "projects" },
    // { href: "/experience", label: "experience" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="w-full h-14.5 flex items-center justify-between px-3.75 py-1.25 sm:h-20 sm:py-3.75">
      {/* Logo */}
      <Link href="/" className="flex gap-5 sm:gap-8 xl:gap-10" onClick={() => setShowLinks(false)}>
        <Image
          src="/logo/logo-sm.svg"
          alt="Logo"
          width={65}
          height={26}
          className="w-12.5"
          priority
        />
        <AnimatePresence mode="wait">
          {(!isMobile || !showLinks) && (
            <motion.h1 
              className="font-mono text-md leading-12 tracking-widest sm:text-2xl whitespace-nowrap"
              initial={isMobile ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              FINN FERGUSON
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
      
      {/* Hamburger - only show on mobile */}
      {isMobile && !showLinks && (
        <button onClick={toggleLinks}>
          <Image
            src="/hamburger.svg"
            alt="Menu"
            width={15}
            height={11}
            priority
          />
        </button>
      )}

      {/* Links - Desktop */}
      {!isMobile && (
        <div className="flex gap-2.5 justify-end sm:gap-3.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-md leading-12 sm:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Links - Mobile with animation */}
      <AnimatePresence>
        {isMobile && showLinks && (
          <motion.div 
            className="flex gap-2.5 justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={toggleLinks}
                  className="font-sans text-md leading-12"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
}
