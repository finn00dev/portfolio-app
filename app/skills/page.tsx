import SectionHeader from "../components/SectionHeader";
import SkillCategory from "../components/SkillCategory";
import PageTransition from "../components/PageTransition";

export default function Skills() {
  return (
    <PageTransition>
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
              { name: "Angular", description: "My go-to framework for enterprise apps, used daily at work" },
              { name: "Next.js", description: "Built this portfolio with it and appreciate it's integration with Vercel" },
              { name: "Tailwind", description: "Rapid styling without context-switching to CSS files" },
              { name: "Jest", description: "Unit and integration testing for reliable code" },
              { name: "SCSS/CSS", description: "Custom animations and pixel-perfect layouts" }
            ]} 
          />
          <div className="hidden lg:block">
            <div className="h-[0.5px] bg-current"></div>
          </div>
          <SkillCategory 
            title="Design" 
            icon="design.svg"
            skills={[
              { name: "Figma", description: "Where I bridge design and dev collaboration" },
              { name: "Wireframing", description: "Quick sketches to validate ideas early" },
              { name: "Prototyping", description: "Interactive flows to test UX before building" },
              { name: "WCAG", description: "Ensuring products work for everyone" },
              { name: "Typography", description: "Crafting readable, beautiful type hierarchies" },
            ]} 
          />
          <div className="hidden lg:block">
            <div className="h-[0.5px] bg-current"></div>
          </div>
          <SkillCategory 
            title="Tools" 
            icon="tools.svg"
            skills={[
              { name: "Windsurf", description: "AI pair programming for faster iteration" },
              { name: "Github", description: "PRs, code reviews, and open source contributions" },
              { name: "Jira", description: "Sprint planning and ticket management" },
              { name: "Firebase", description: "Quick backends for side projects" },
              { name: "CI/CD", description: "Automated pipelines for confident deploys" },
            ]} 
          />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
