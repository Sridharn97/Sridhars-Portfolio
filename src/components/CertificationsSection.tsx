import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ShieldCheck, Database, Brain, Cloud, Sparkles, LayoutGrid, Lock, Unlock, ScanFace, Code2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
  link: string;
  skills: string[];
  idHash: string;
}

const certifications: Certification[] = [
  {
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    date: "Nov 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7ioXvKEAiH8qe_JPMorgan%20Chase_Sridhar%20C_completion_certificate.pdf",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "Python", "Data Analysis", "System Design"],
    idHash: "JPM-0x7F2A",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Credly",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1T0YJUY_QnPzyjCXMbJ5EY9ZsJWpL_fxJ",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["Cloud Computing", "S3", "EC2", "IAM"],
    idHash: "AWS-0x9C4B",
  },
  {
    title: "Learn Java Programming: Beginner to Master",
    issuer: "Udemy",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/1D1lQosd2ivudijmOAu-Kn05I2RaYnKzY-java",
    icon: <Database className="w-6 h-6" />,
    skills: ["OOP", "Java 17", "Multi-threading"],
    idHash: "UDY-0x1A8F",
  },
  {
    title: "Mastering DS & Algorithms Using C / C++",
    issuer: "Udemy",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1w-1EaHqt0HnVTn7FPwbr_7hgJHN0H850",
    icon: <LayoutGrid className="w-6 h-6" />,
    skills: ["Recursion", "Trees", "Sorting", "Graphs"],
    idHash: "UDY-0x4D2E",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "July 2023",
    link: "https://drive.google.com/file/d/1QuyGLdH1474EKDSQ8ph2cHrH1XrnUCbd",
    icon: <Brain className="w-6 h-6" />,
    skills: ["CNNs", "Computer Vision", "PyTorch"],
    idHash: "NVD-0x88F1",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "June 2023",
    link: "https://coursera.org/share/1918f0d40eea9f5613e3e55b6d23679d",
    icon: <Sparkles className="w-6 h-6" />,
    skills: ["LLMs", "Gen AI", "Machine Learning"],
    idHash: "GGL-0x3B99",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative scroll-mt-24 overflow-hidden bg-background">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none neural-grid" />
      
      <div className="section-divider mb-16 opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-20">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary" /> Security Vault
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Verified <span className="text-gradient">credentials</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Hover over the secure server nodes to unlock the vault doors and inspect my authenticated certifications.
            </p>
          </div>
        </AnimatedSection>

        {/* Vault Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <div className="group relative w-full h-[320px] rounded-2xl overflow-hidden border border-border/40 bg-card shadow-2xl glass-card cursor-crosshair">
                
                {/* ==========================================
                    VAULT DOOR (FRONT SHUTTER)
                    ========================================== */}
                <div className="absolute inset-0 z-20 bg-card border-b-4 border-muted-foreground/20 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-full origin-top">
                  
                  {/* Hazard Stripes Top */}
                  <div className="absolute top-0 w-full h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(var(--foreground),0.1)_10px,rgba(var(--foreground),0.1)_20px)] opacity-50" />
                  
                  {/* Status LEDs */}
                  <div className="absolute top-5 right-5 flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground group-hover:text-green-500 transition-colors duration-500 uppercase">
                      Status
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:bg-green-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-colors duration-500" />
                  </div>

                  {/* Vault Node ID */}
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                      NODE // {cert.idHash}
                    </span>
                  </div>
                  
                  {/* Lock Centerpiece */}
                  <div className="w-20 h-20 rounded-full border border-border/50 bg-muted/20 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                    <Lock className="w-8 h-8 text-muted-foreground/50 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
                    <Unlock className="w-8 h-8 text-primary absolute opacity-0 scale-150 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
                  
                  {/* Issuer Stencil */}
                  <h3 className="font-mono text-2xl font-black tracking-[0.2em] uppercase text-muted-foreground/30 text-center px-4">
                    {cert.issuer}
                  </h3>

                  {/* Hazard Stripes Bottom */}
                  <div className="absolute bottom-0 w-full h-2 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(var(--foreground),0.1)_10px,rgba(var(--foreground),0.1)_20px)] opacity-50" />
                </div>

                {/* ==========================================
                    VAULT INTERIOR (DECRYPTED DATA)
                    ========================================== */}
                <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between bg-card/10">
                  {/* Intense Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex justify-between items-start z-10">
                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                      {cert.icon}
                    </div>
                    <div className="text-[10px] font-mono py-1 px-2.5 rounded border border-border/50 bg-background/50 text-muted-foreground tracking-widest uppercase">
                      {cert.date}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="z-10 mt-4 flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                      {cert.issuer}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-[10px] px-2 py-1 rounded bg-muted/40 border border-border/40 text-muted-foreground font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Biometric Verify Button */}
                  <motion.a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-10 w-full group/btn relative overflow-hidden flex items-center justify-center gap-3 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold tracking-widest uppercase transition-all hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Scanning laser line in button */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_10px_rgba(var(--primary),1)] -translate-y-[200%] group-hover/btn:animate-[scan-vertical_2s_linear_infinite]" />
                    
                    <ScanFace className="w-4 h-4" /> 
                    <span>Verify Core Data</span>
                    <ExternalLink className="w-3.5 h-3.5 absolute right-4 opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                  </motion.a>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.8} className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-card border border-border/50 shadow-sm text-sm text-muted-foreground font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            System Secure. All credentials cryptographically verified.
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsSection;
