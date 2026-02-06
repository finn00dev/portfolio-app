"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

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
      <Link href="/" className="flex gap-5 sm:gap-8 xl:gap-10" onClick={toggleLinks}>
        <Image
          src="/logo/logo-sm.svg"
          alt="Logo"
          width={65}
          height={26}
          className="w-12.5"
          priority
        />
        {(!isMobile || !showLinks) && (
          <h1 className="font-mono text-md leading-12 tracking-widest sm:text-2xl">FINN FERGUSON</h1>
        )}
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

      {/* Links */}
      {(!isMobile && !showLinks) || (isMobile && showLinks) ? (
        <div className="flex gap-2.5 justify-end sm:gap-3.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={isMobile ? toggleLinks : undefined}
              className="font-sans text-md leading-12 sm:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
      
    </nav>
  );
}
