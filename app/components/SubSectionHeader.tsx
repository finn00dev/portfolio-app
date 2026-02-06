"use client";

interface SubSectionHeaderProps {
  title: string;
  icon?: string;
}

export default function SubSectionHeader({ title, icon }: SubSectionHeaderProps) {
  return (
    <div className="w-full h-20 px-4 py-3 flex justify-end items-end border border-current rounded-[15px] sm:h-21.75 xl:h-25.25">
        <div className="flex gap-5">
            <h3 className="font-mono font-bold italic text-right text-xl sm:text-2xl">{title.toUpperCase()}</h3>
            {icon && <img src={icon} alt="icon" className="text-current w-6"/>}
        </div>
        
    </div>
  );
}
