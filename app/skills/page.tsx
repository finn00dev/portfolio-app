import SectionHeader from "../components/SectionHeader";
import SkillCategory from "../components/SkillCategory";

export default function Skills() {
  return (
    <div className="flex flex-col pb-5 gap-5 lg:gap-9">
      <SectionHeader title="Skills" />
      <div className="flex flex-col items-center gap-7.5 lg:px-5 lg:items-start">
        <div className="max-w-131.25 lg:max-w-none">
          <h3 className="text-lg inline sm:text-xl">✦</h3>
          <h3 className="font-mono font-bold inline italic text-md mb-1 sm:text-xl lg:text-2xl"> NEW SKILLS THIS YEAR:</h3>
          <p className="font-mono font-bold text-xs sm:text-sm lg:text-base xl:inline xl:ml-10">Tailwind, Windsurf, Next.js, Design Systems and Adaptive Design</p>
        </div>
        <div className="max-w-131.25 w-full flex flex-col gap-7.5 lg:max-w-none">
          <div className="hidden lg:block">
            <div className="h-[0.5px] bg-current"></div>
          </div>
          <SkillCategory 
            title="Frontend" 
            icon="fe.svg"
            skills={[
              { name: "Angular", description: "Component-based framework" },
              { name: "Next.js", description: "React framework with SSR" },
              { name: "Tailwind", description: "Utility-first CSS framework" },
              { name: "Jest", description: "JavaScript testing framework" },
              { name: "TypeScript", description: "Typed JavaScript" },
              { name: "SCSS/CSS", description: "Styling and animations" }
            ]} 
          />
          <div className="hidden lg:block">
            <div className="h-[0.5px] bg-current"></div>
          </div>
          <SkillCategory 
            title="Design" 
            icon="design.svg"
            skills={[
              { name: "Figma", description: "Collaborative design tool" },
              { name: "Wireframing", description: "Low-fidelity layouts" },
              { name: "Prototyping", description: "Interactive mockups" },
              { name: "WCAG", description: "Accessibility guidelines" },
              { name: "Typography", description: "Text design systems" },
            ]} 
          />
          <div className="hidden lg:block">
            <div className="h-[0.5px] bg-current"></div>
          </div>
          <SkillCategory 
            title="Tools" 
            icon="tools.svg"
            skills={[
              { name: "Windsurf", description: "AI-powered IDE" },
              { name: "Github", description: "Version control platform" },
              { name: "Jira", description: "Project management" },
              { name: "Firebase", description: "Backend-as-a-service" },
              { name: "CI/CD", description: "Automated deployment" },
            ]} 
          />
        </div>
      </div>
    </div>
  );
}
