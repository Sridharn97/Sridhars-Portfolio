import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

const internships = [
  {
    type: "professional",
    company: "ISAII AI",
    role: "Full Stack Developer Intern",
    year: "2026",
    description:
      "Contributed to building scalable, high-performance frontend features with Next.js and React.js by developing user interfaces, refactoring code, fixing bugs, participating in code reviews, and working in agile development processes to continuously improve performance, maintain code quality, and meet project deadlines.",
  },
  {
    type: "training",
    company: "Algotutor",
    role: "Modern Full Stack Training",
    year: "2025",
    description:
      "Developed full-stack web applications using Next.js with server-side rendering, routing, and RESTful APIs. Gained hands-on experience in building scalable solutions with React, JavaScript, and MongoDB.",
  },
  {
    type: "training",
    company: "Better Tomorrow",
    role: "MERN Stack Training",
    year: "2025",
    description:
      "Completed MERN Stack Training Internship at Better Tomorrow Training Institute, gaining expertise in MongoDB, Express, ReactJS, and NodeJS for project development.",
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-16 relative">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — Experience
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
            My <span className="text-gradient">internships</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15}>
              <motion.div
                whileHover={{ x: 6, borderColor: "hsl(0 0% 30%)" }}
                className="border border-border rounded-lg p-6 md:p-8 transition-all duration-300 group relative overflow-hidden ai-circuit-corners ai-glow-pulse"
              >
                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay">
                  <div className="ai-scan-line" style={{ animationDuration: '6s' }} />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-foreground transition-colors duration-300">
                    {item.type === "professional" ? (
                      <Briefcase className="w-5 h-5 text-foreground" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-foreground" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg font-bold text-foreground tech-glitch-hover inline-block">{item.company}</h3>
                      <span className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground w-fit">
                        {item.type === "professional" ? "Professional" : "Training"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-foreground">{item.role}</span>
                      <span className="text-xs font-mono text-muted-foreground">• {item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
