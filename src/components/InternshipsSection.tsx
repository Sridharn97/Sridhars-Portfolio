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

        <div className="relative border-l border-border/40 ml-4 md:ml-12 pl-6 md:pl-12 space-y-10 py-4">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15} className="relative group">
              {/* Timeline dot selector node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-8 w-[14px] h-[14px] rounded-full bg-background border-2 border-border/60 flex items-center justify-center z-20 group-hover:scale-110 group-hover:border-foreground transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.03)]">
                <div className="w-[6px] h-[6px] rounded-full bg-border/60 group-hover:bg-foreground transition-colors" />
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                className="border border-border/40 rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden glass-card glass-card-hover flex flex-col md:flex-row md:items-start gap-6 md:gap-8"
              >
                {/* Icon / Logo */}
                <div className="w-14 h-14 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-center shrink-0 group-hover:border-border transition-colors duration-300 relative z-10 overflow-hidden shadow-inner">
                  {item.img ? (
                    <img src={item.img} alt={item.company} className="w-full h-full object-cover" />
                  ) : item.type === "professional" ? (
                    <Briefcase className="w-6 h-6 text-muted-foreground" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.company}</h3>
                      <span className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border border-border bg-muted/40 text-foreground w-fit">
                        {item.type === "professional" ? "Professional" : "Training"}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="text-base font-medium text-foreground/80 mb-4 font-sans">
                    {item.role}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Skills Pills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="text-[11px] font-mono text-muted-foreground bg-background/40 px-3 py-1.5 rounded-md border border-border/50 group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300 cursor-default shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
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
