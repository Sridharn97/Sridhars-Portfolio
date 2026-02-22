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
    <section id="about" className="py-16 relative">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — About Me
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Turning ideas into
            <br />
            <span className="text-gradient">digital reality</span>
          </h2>
        </AnimatedSection>

        {/* ── Bio + Highlights ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Bio */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-5">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Hi, I'm{" "}
                <span className="text-foreground font-semibold">Sridhar</span> — a dedicated
                Full Stack Developer and eager tech enthusiast. My skill set spans both
                front-end and back-end technologies, allowing me to create seamless and
                dynamic web applications.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                I'm passionate about continuous learning and exploring new technologies.
                I enjoy building practical applications that solve real problems and
                improve user experience.
              </p>

              {/* Meta tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1.5">
                  <MapPin className="w-3 h-3" /> Tamil Nadu, India
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1.5">
                  <Calendar className="w-3 h-3" /> Available for Internship
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1.5">
                  <Award className="w-3 h-3" /> B.E CSE — 2027
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Highlight cards */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  whileHover={{ y: -4, borderColor: "hsl(0 0% 28%)" }}
                  className="border border-border rounded-xl p-5 transition-all duration-300 group"
                  style={{ background: "hsl(0 0% 6%)" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 border border-border bg-muted group-hover:border-foreground/20 transition-colors">
                    <item.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">{item.title}</div>
                  <div className="text-[11px] text-muted-foreground font-mono leading-snug">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>


        {/* ── Education Timeline ── */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-border bg-muted">
              <GraduationCap className="w-4 h-4 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
              <p className="text-xs text-muted-foreground font-mono">academic background</p>
            </div>
          </div>

          <div className="relative pl-6">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree + edu.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, borderColor: "hsl(0 0% 28%)" }}
                  className="relative border border-border rounded-xl p-5 transition-all duration-300"
                  style={{ background: "hsl(0 0% 6%)" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[1.625rem] top-6 w-2 h-2 rounded-full bg-foreground/30 border border-border" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-0.5">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono mb-1">
                        {edu.degree}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-mono">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-xs font-mono text-muted-foreground tracking-wider whitespace-nowrap">
                        {edu.year}
                      </span>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                        style={{ background: "hsl(0 0% 8%)" }}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
