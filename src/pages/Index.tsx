import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import InternshipsSection from "@/components/InternshipsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Background3DGrid } from "@/components/3D/Background3DGrid";

const Index = () => {
  return (
    <div className="bg-[#04060a] text-foreground min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* 3D Infinite Perspective Grid Background */}
      <Background3DGrid />
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <InternshipsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
