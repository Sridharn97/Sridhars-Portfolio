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
      "Developed and optimized scalable frontend components using Next.js and React.js. Integrated backend services with Supabase, conducted API testing via Postman, and participated in active code reviews and agile sprints to deliver high-quality project builds under deadlines.",
  },
  {
    type: "training",
    company: "Algotutor",
    role: "Modern Full Stack Training",
    year: "2025",
    skills: ["Next.js", "React.js", "JavaScript", "MongoDB", "REST APIs"],
    description:
      "Built full-stack web applications utilizing Next.js Server-Side Rendering (SSR), API routes, and RESTful endpoints. Implemented scalable storage structures and state management using React and MongoDB.",
  },
  {
    type: "training",
    company: "Better Tomorrow",
    role: "MERN Stack Training",
    year: "2025",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Acquired hands-on experience building MERN stack projects. Created RESTful APIs using Express/Node.js and managed database interactions via MongoDB.",
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-16 relative scroll-mt-24 overflow-hidden">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              — Experience
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              My <span className="text-gradient">internships</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6 py-4">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15} className="relative group">
              <motion.div
                whileHover={{ y: -4 }}
                className="border border-border/40 rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden glass-card glass-card-hover flex flex-col md:flex-row md:items-start gap-6 md:gap-8 shadow-sm"
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
                      <span className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border border-border/60 bg-muted/60 text-foreground w-fit">
                        {item.type === "professional" ? "Professional" : "Training"}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50">
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
                        <span key={skill} className="text-[11px] font-mono text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-md border border-border/50 group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300 cursor-default shadow-sm">
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
