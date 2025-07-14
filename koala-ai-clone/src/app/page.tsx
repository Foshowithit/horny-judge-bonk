import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { HowToBuySection } from "@/components/HowToBuySection";
import { BuildABonkSection } from "@/components/BuildABonkSection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <BuildABonkSection />
      <JoinSection />
      <Footer />
    </>
  );
}
