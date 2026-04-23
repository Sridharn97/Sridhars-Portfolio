import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

const internships = [
  {
    type: "professional",
    company: "ISAII AI",
    role: "Full Stack Developer Intern",
    year: "2026",
    img: "/ISAII.jpeg",
    skills: ["Next.js", "React.js", "Supabase", "Postman", "Agile"],
    description:
      "Contributed to building scalable, high-performance frontend features using Next.js and React.js by developing user interfaces, refactoring code, fixing bugs, integrating with backend services like Supabase, and performing application and API testing using Postman, including creating testing documentation. Participated in code reviews and agile processes to enhance performance, maintain code quality, and meet project deadline.",
  },
  {
    type: "training",
    company: "Algotutor",
    role: "Modern Full Stack Training",
    year: "2025",
    skills: ["Next.js", "React.js", "JavaScript", "MongoDB", "REST APIs"],
    description:
      "Developed full-stack web applications using Next.js with server-side rendering, routing, and RESTful APIs. Gained hands-on experience in building scalable solutions with React, JavaScript, and MongoDB.",
  },
  {
    type: "training",
    company: "Better Tomorrow",
    role: "MERN Stack Training",
    year: "2025",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Completed MERN Stack Training Internship at Better Tomorrow Training Institute, gaining expertise in MongoDB, Express, ReactJS, and NodeJS for project development.",
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              — Experience
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              My <span className="text-gradient">internships</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15}>
              <motion.div
                whileHover={{ x: 8, borderColor: "hsl(var(--primary))", boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.2)" }}
                className="border border-border rounded-2xl p-6 md:p-8 transition-shadow duration-300 group relative overflow-hidden ai-circuit-corners flex flex-col md:flex-row md:items-start gap-6 md:gap-8"
                style={{ background: "hsl(var(--card))" }}
              >
                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay opacity-0 group-hover:opacity-100">
                  <div className="ai-scan-line" style={{ animationDuration: '6s' }} />
                </div>
                
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%)" }}
                />

                {/* Icon / Logo */}
                <div className="w-14 h-14 rounded-xl border border-border bg-muted flex items-center justify-center shrink-0 group-hover:border-primary tech-glitch-hover transition-colors duration-300 relative z-10 overflow-hidden">
                  {item.img ? (
                    <img src={item.img} alt={item.company} className="w-full h-full object-cover" />
                  ) : item.type === "professional" ? (
                    <Briefcase className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors">{item.company}</h3>
                      <span className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary w-fit">
                        {item.type === "professional" ? "Professional" : "Training"}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="text-base font-medium text-foreground mb-4">
                    {item.role}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Skills Pills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="text-[11px] font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded-md border border-border/50 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Left accent line */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.6), transparent)" }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
