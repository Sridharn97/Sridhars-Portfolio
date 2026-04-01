import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, ExternalLink, ShieldCheck, Terminal, Database, Brain, Cloud, Sparkles, LayoutGrid } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
  color: string;
  link: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    date: "Nov 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7ioXvKEAiH8qe_JPMorgan%20Chase_Sridhar%20C_completion_certificate.pdf",
    icon: <Award className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["Java", "Python", "Data Analysis", "System Design"]
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Credly",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1T0YJUY_QnPzyjCXMbJ5EY9ZsJWpL_fxJ",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-orange-500/20 to-yellow-500/20",
    skills: ["Cloud Computing", "S3", "EC2", "IAM"]
  },
  {
    title: "Learn Java Programming: Beginner to Master",
    issuer: "Udemy",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/1D1lQosd2ivudijmOAu-Kn05I2RaYnKzY-java",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-red-500/20 to-orange-500/20",
    skills: ["OOP", "Java 17", "Multi-threading"]
  },
  {
    title: "Mastering DS & Algorithms Using C / C++",
    issuer: "Udemy",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1w-1EaHqt0HnVTn7FPwbr_7hgJHN0H850",
    icon: <Database className="w-6 h-6" />,
    color: "from-indigo-500/20 to-purple-500/20",
    skills: ["Recursion", "Trees", "Sorting", "Graphs"]
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "July 2023",
    link: "https://drive.google.com/file/d/1QuyGLdH1474EKDSQ8ph2cHrH1XrnUCbd",
    icon: <Brain className="w-6 h-6" />,
    color: "from-green-500/20 to-emerald-500/20",
    skills: ["CNNs", "Computer Vision", "PyTorch"]
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "June 2023",
    link: "https://coursera.org/share/1918f0d40eea9f5613e3e55b6d23679d",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-600/20 to-blue-400/20",
    skills: ["LLMs", "Gen AI", "Machine Learning"]
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="section-divider mb-16 opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <AnimatedSection className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase flex items-center gap-2">
                <span className="w-8 h-px bg-muted-foreground/30 inline-block" /> Credentials
              </p>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-muted-foreground">
                {certifications.length} TOTAL
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              My <span className="text-gradient">certifications</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="hidden md:block">
            <p className="max-w-xs text-muted-foreground text-sm font-mono leading-relaxed text-right">
              Validated expertise across software engineering, cloud architecture, and artificial intelligence.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full glass border border-white/5 rounded-xl p-8 transition-all duration-500 ai-circuit-corners ai-glow-pulse overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent"
              >
                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay">
                  <div className="ai-scan-line" />
                </div>



                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-300 group-hover:scale-110 group-hover:bg-white/10 shadow-inner">
                      {cert.icon}
                    </div>
                    <span className="text-[10px] font-mono py-1 px-2 rounded-full border border-white/10 bg-white/5 text-muted-foreground tracking-tighter">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground/60 mb-4 font-mono">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-[9px] px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-muted-foreground font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <motion.a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/link overflow-hidden relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-2 z-10">
                        <LayoutGrid className="w-3.5 h-3.5" /> Verify Credential
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover/link:opacity-100 transition-all group-hover/link:translate-x-0.5 z-10" />
                      
                      {/* Hover filling effect */}
                      <motion.div 
                        className="absolute inset-0 bg-primary/5 -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500"
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.8} className="mt-20 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground font-mono"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            All certifications are verified and visually authenticated
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsSection;
