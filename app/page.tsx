import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Home() {


  return (
    <div
    //  className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
     >
      
    <HeroSection />       
    <ExperienceSection/>
    <ProjectsSection/>
    <FooterSection />


    <TailwindIndicator />
    </div>
  );
}
