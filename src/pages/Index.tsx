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
import SparkleCanvas from "@/components/SparkleCanvas";
import BackgroundGlow from "@/components/BackgroundGlow";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <BackgroundGlow />
      <SparkleCanvas />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InternshipsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
