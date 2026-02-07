import KeyValueList from "../components/KeyValueList";
import Links from "../components/Links";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";

export default function About() {

  const keyValues = [
    { key: "AGE", value: "25" },
    { key: "LOCATION", value: "Hamilton, Ontario" },
    { key: "FUN FACT", value: "I will notice if it’s off by 1px." },
    // { key: "FAVOURITE SONG", value: "Chinatown by Bleachers" },
    { key: "FAVOURITE FONT", value: "Helvetica" },
    { key: "HOBBIES", value: "Cooking, Hiking and watching pretentious movies" },
  ];
  
  return (
    <PageTransition>
    <div className="flex flex-col pb-5 gap-3.5 sm:gap-5 h-[calc(100dvh-58px)] sm:h-[calc(100dvh-80px)] lg:overflow-hidden">
      <SectionHeader title="About" />
      <div className="flex flex-col items-center lg:flex-row lg:gap-7.5 lg:justify-center lg:items-start xl:gap-10 lg:flex-1 lg:min-h-0">
        <div className="max-w-135 flex flex-col w-full gap-4.5 md:max-w-152.5 md:gap-3.75 lg:w-110 lg:h-full xl:w-137.5 xl:gap-5">
          <img src="/about/about.jpg"  alt="Finn" className="object-cover w-full lg:flex-1 lg:min-h-0 lg:max-h-87.5" />
          
          <div className="flex items-center gap-5">
            <span className="font-sans text-4xl italic md:text-[40px]">Hey, I'm Finn</span>
            <div className="flex-1 h-[1.5px] bg-current"></div>
          </div>

          <p className="font-mono text-[11px] mb-3.5 md:text-[13px]">
            I’m a design technologist focused on solving real problems through clean, thoughtful interfaces. I enjoy building accessible products, shipping meaningful features, and bridging the gap between design and engineering to create experiences that scale and feel great to use.
          </p>
        </div>
        <div className="max-w-135 flex flex-col items-center w-full gap-8.5 pt-2.5 md:max-w-152.5 lg:w-120 xl:w-137.5">
          <KeyValueList items={keyValues} />
          <Links />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
