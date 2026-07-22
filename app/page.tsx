import { AboutSection } from "@/components/home/about-section";
import { AiSystemsSection } from "@/components/home/ai-systems-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProblemsSection } from "@/components/home/problems-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyNileSection } from "@/components/home/why-nile-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <ServicesSection />

      <AiSystemsSection />

      <ProblemsSection />

      <ProcessSection />

      <WhyNileSection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </main>
  );
}