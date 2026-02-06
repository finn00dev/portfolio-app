"use client";

interface ButtonProps {
  label: string;
  href: string;
}

export default function Button({ label, href }: ButtonProps) {
  return (
    <a 
      href={href}
      className="w-fit font-sans px-3.75 py-2.5 text-[14px] border border-current hover:bg-current hover:text-background transition-colors block text-center [box-shadow:3px_3px_0px_0px_currentColor] sm:text-lg lg:text-xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
