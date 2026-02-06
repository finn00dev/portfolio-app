"use client";

import MarqueeText from "react-marquee-text";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  const upperTitle = title.toUpperCase();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="font-mono text-2xl opacity-50 sm:text-4xl lg:text-5xl lg:leading-18">
        <MarqueeText duration={20}>
          {upperTitle.repeat(10)}
        </MarqueeText>
      </div>
      <h2 className="absolute top-0 font-mono font-bold left-7.5 px-2.5 text-2xl bg-background sm:text-4xl sm:left-12 sm:px-4 lg:text-5xl lg:left-15 lg:px-7 lg:leading-18">
        {upperTitle}
      </h2>
    </div>
  );
}
