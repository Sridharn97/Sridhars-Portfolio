import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Lightbulb,
  Rocket,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable & scalable architecture" },
  { icon: Layers, title: "Full Stack", desc: "Front-end to back-end expertise" },
  { icon: Lightbulb, title: "Problem Solver", desc: "150+ LeetCode problems solved" },
  { icon: Rocket, title: "Fast Learner", desc: "Always exploring new technologies" },
];

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E — Computer Science & Engineering",
    score: "CGPA: 7.82 (Up to 5th Sem)",
    year: "2023 – 2027",
    status: "Ongoing",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "HSC — Higher Secondary",
    score: "89.67%",
    year: "2021 – 2023",
    status: "Completed",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "SSLC — Secondary School",
    score: "Pass",
    year: "2020 – 2021",
    status: "Completed",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              — About Me
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Turning ideas into <br className="md:hidden" /><span className="text-gradient">digital reality</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-4">
          
          {/* Bio Card (2x2) */}
          <AnimatedSection delay={0.1} className="md:col-span-2 lg:row-span-2 lg:col-span-2">
            <motion.div
              whileHover={{ y: -4, borderColor: "hsl(var(--primary))", boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.2)" }}
              className="h-full relative rounded-2xl p-8 lg:p-10 border border-border ai-circuit-corners group overflow-hidden flex flex-col justify-between transition-shadow duration-300"
              style={{ background: "hsl(var(--card))" }}
            >
              <div className="ai-scan-overlay opacity-0 group-hover:opacity-100">
                <div className="ai-scan-line" style={{ animationDuration: '6s' }} />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%)" }}
              />

              <div className="space-y-6 relative z-10 mb-8">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Hi, I'm <span className="text-foreground font-medium">Sridhar</span> — a dedicated Full Stack Developer and eager tech enthusiast. My skill set spans both front-end and back-end technologies, allowing me to create seamless and dynamic web applications.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  I'm passionate about continuous learning and exploring new technologies. I enjoy building practical applications that solve real problems and improve user experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border/50 bg-background/50 rounded-full px-4 py-2 hover:bg-muted hover:text-foreground hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default">
                  <MapPin className="w-3.5 h-3.5" /> Tamil Nadu, India
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border/50 bg-background/50 rounded-full px-4 py-2 hover:bg-muted hover:text-foreground hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default">
                  <Calendar className="w-3.5 h-3.5" /> Available for Internship
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border/50 bg-background/50 rounded-full px-4 py-2 hover:bg-muted hover:text-foreground hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default">
                  <Award className="w-3.5 h-3.5" /> B.E CSE — 2027
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Highlights (1x1 each) */}
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.1} className="col-span-1">
              <motion.div
                whileHover={{ y: -6, borderColor: "hsl(var(--primary))", boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.2)" }}
                className="h-full relative rounded-2xl p-6 border border-border group overflow-hidden ai-circuit-corners flex flex-col justify-center transition-shadow duration-300"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="ai-scan-overlay opacity-0 group-hover:opacity-100">
                  <div className="ai-scan-line" style={{ animationDuration: '4s' }} />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }}
                />

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-border bg-muted tech-glitch-hover">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">{item.desc}</p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)" }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Education Section ── */}
        <AnimatedSection delay={0.5}>
          <div className="flex items-center gap-3 mb-8 max-w-6xl mx-auto">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-muted tech-glitch-hover">
              <GraduationCap className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">academic journey & qualifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree + edu.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15 }}
                whileHover={{ y: -6, borderColor: "hsl(var(--primary))", boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.2)" }}
                className="relative rounded-2xl p-6 lg:p-8 border border-border group overflow-hidden ai-circuit-corners flex flex-col justify-between transition-shadow duration-300"
                style={{ background: "hsl(var(--card))" }}
              >
                {/* AI Hover effects */}
                <div className="ai-scan-overlay opacity-0 group-hover:opacity-100">
                  <div className="ai-scan-line" style={{ animationDuration: '4s' }} />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }}
                />

                <div className="relative z-10 mb-8">
                  {/* Status Pill & Year */}
                  <div className="flex items-start justify-between gap-2 mb-6">
                    <span className="text-xs font-mono text-muted-foreground bg-background/50 px-3 py-1.5 rounded-lg border border-border/50">
                      {edu.year}
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border border-border/50 shrink-0 ${
                      edu.status === 'Ongoing' ? 'text-green-400/80 bg-green-500/10 border-green-500/20' : 'text-muted-foreground bg-background/50'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution & Degree */}
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-white transition-colors">{edu.institution}</h4>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">{edu.degree}</p>
                </div>

                {/* Score */}
                <div className="relative z-10 mt-auto pt-5 border-t border-border/50">
                  <div className="inline-flex items-center gap-2 text-xs text-foreground font-mono px-3 py-2 rounded-lg bg-muted/30 border border-border/50">
                    <span className="text-muted-foreground">Score:</span>
                    {edu.score}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)" }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default AboutSection;
