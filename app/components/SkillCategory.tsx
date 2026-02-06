"use client";

import SubSectionHeader from "./SubSectionHeader";

interface Skill {
  name: string;
  description: string;
}

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <div className="flex flex-col gap-3.5 lg:flex-row lg:gap-10">
      <div className="lg:w-76.25">
        <SubSectionHeader title={title} icon={icon} />
      </div>
      <div className="flex flex-col px-2.5 gap-2 lg:grow lg:grid lg:grid-cols-2 lg:gap-7 lg:px-0">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="h-16.75 flex gap-4 justify-between items-center">
              <h5 className="font-sans text-[40px] sm:text-5xl xl:text-[56px]">{skill.name}</h5>
              <p className="font-mono text-[8px] text-right sm:text-[12px] xl:text-sm">
                {skill.description}
              </p>
            </div>
            {index < skills.length - 1 && (
              <div className="h-[0.5px] bg-current mt-2 lg:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
