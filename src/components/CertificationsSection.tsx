import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ShieldCheck, Database, Brain, Cloud, Sparkles, LayoutGrid, Lock, Unlock, ScanFace, Code2, Cpu } from "lucide-react";

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

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">CREDENTIALS</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
              <Cpu size={14} /> 06 / SECURITY VAULT
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              AUTHENTICATED <span className="text-gradient">CERTIFICATIONS & VAULT</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Vault Grid with Solid Dimensional Door Shutters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <div 
                data-cursor="cert"
                className="group relative w-full h-[320px] rounded-2xl overflow-hidden solid-card border border-white/10 shadow-2xl cursor-crosshair cert-vault-card"
              >
                
                {/* VAULT DOOR SHUTTER (FRONT SOLID COVER) */}
                <div className="absolute inset-0 z-20 bg-slate-950 border-b-4 border-slate-800 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-full origin-top">
                  
                  {/* Status LEDs */}
                  <div className="absolute top-5 right-5 flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
                      LOCKED
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:bg-cyan-400 shadow-[0_0_10px_rgba(239,68,68,0.8)] group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-colors" />
                  </div>

                  {/* Vault Node Hash */}
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      NODE // {cert.idHash}
                    </span>
                  </div>
                  
                  {/* Lock Centerpiece */}
                  <div className="w-20 h-20 rounded-2xl border-2 border-white/10 bg-slate-900 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden group-hover:border-cyan-400/50">
                    <Lock className="w-8 h-8 text-slate-500 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
                    <Unlock className="w-8 h-8 text-cyan-400 absolute opacity-0 scale-150 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
                  
                  {/* Issuer Stencil */}
                  <h3 className="font-mono text-xl font-black tracking-[0.25em] uppercase text-slate-500 text-center px-4">
                    {cert.issuer}
                  </h3>
                </div>

                {/* VAULT INTERIOR (DECRYPTED DATA) */}
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between solid-card-secondary">
                  
                  <div className="flex justify-between items-start z-10">
                    <div className="p-3 rounded-xl bg-slate-950 border border-cyan-400/40 text-cyan-400 shadow-md">
                      {cert.icon}
                    </div>
                    <div className="text-[10px] font-mono py-1 px-2.5 rounded border border-white/10 bg-slate-950 text-cyan-300 font-bold tracking-widest uppercase">
                      {cert.date}
                    </div>
                  </div>

                  <div className="z-10 mt-3 flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-slate-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Physical 3D Verify Button */}
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-primary w-full py-2.5 font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <ScanFace size={16} /> 
                    <span>VERIFY CORE DATA</span>
                  </a>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
