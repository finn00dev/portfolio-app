import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-58px)] flex flex-col sm:h-[calc(100vh-80px)]">
      <div className="w-full flex-1 overflow-hidden">
        <img src="/hero/hero-sm. " alt="Hero" className="object-cover h-full w-full lg:hidden" />
        <img src="/hero/hero-lg.jpg" alt="Hero" className="object-cover h-full w-full hidden lg:block" />
      </div>
      <h3 className="font-mono font-bold text-[10px] leading-13 sm:text-[14px] sm:mb-2.5 lg:text-base">Software Developer & Design Technologist</h3>
    </div>
  );
}
