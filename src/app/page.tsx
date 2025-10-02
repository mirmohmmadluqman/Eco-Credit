import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhitepaperSection } from "@/components/sections/whitepaper-section";
import { ContractsSection } from "@/components/sections/contracts-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DappSection } from "@/components/sections/dapp-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { TeamSection } from "@/components/sections/team-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ReportSection } from "@/components/sections/report-section";
import { FaqSection } from "@/components/sections/faq-section";
import { AskAiSection } from "@/components/sections/ask-ai-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <DappSection />
        <AskAiSection />
        <ContractsSection />
        <ReportSection />
        <RoadmapSection />
        <WhitepaperSection />
        <TeamSection />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
