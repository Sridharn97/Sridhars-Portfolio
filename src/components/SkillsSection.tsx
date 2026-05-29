import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Code2,
  Layout,
  Server,
  Cpu,
  Trophy,
  Wrench,
  ExternalLink,
  Braces,
  Globe,
  Database,
  Star,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 72 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    icon: Cpu,
    title: "Core CS",
    skills: [
      { name: "DSA", level: 82 },
      { name: "DBMS", level: 75 },
      { name: "OS", level: 70 },
      { name: "Networks", level: 68 },
      { name: "System Design", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Power BI", level: 65 },
      { name: "Canva", level: 70 },
      { name: "Cursor", level: 75 },
    ],
  },
];

const codingPlatforms = [
  {
    name: "LeetCode",
    achievement: "150+ Problems Solved",
    url: "https://leetcode.com/u/Sridhar_n09/",
    icon: Braces,
    tag: "DSA",
    glowColor: "rgba(239, 162, 33, 0.12)",
    iconColor: "text-amber-500",
  },
  {
    name: "HackerRank",
    achievement: "5★ in Python",
    url: "https://www.hackerrank.com/profile/sridhar_n2023cse",
    icon: Star,
    tag: "Python",
    glowColor: "rgba(46, 204, 113, 0.12)",
    iconColor: "text-green-500",
  },
  {
    name: "CodeChef",
    achievement: "2★ Rating",
    url: "https://www.codechef.com/users/sridhar94",
    icon: Globe,
    tag: "Competitive",
    glowColor: "rgba(168, 85, 24, 0.12)",
    iconColor: "text-orange-500",
  },
  {
    name: "SkillRack",
    achievement: "Advanced Level",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=484312&key=54fc07d910a00431ded128655b8128a617cdc05f",
    icon: Database,
    tag: "Problem Solving",
    glowColor: "rgba(6, 182, 212, 0.12)",
    iconColor: "text-cyan-500",
  },
];

const allTechs = [
  "Java", "Python", "React", "Node.js", "MongoDB", "MySQL", "Next.js",
  "C++", "Express.js", "Git", "HTML", "CSS", "JavaScript", "TypeScript",
  "Power BI", "DSA", "System Design", "REST APIs", "Tailwind CSS", "VS Code",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-primary uppercase mb-4">
            — Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            My <span className="text-gradient">tech stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-16">
            Technologies I work with to build fast, scalable, and elegant products.
          </p>
        </AnimatedSection>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl p-5 h-full relative group cursor-default border border-border/40 glass-card glass-card-hover transition-all duration-300"
              >
                {/* Subtle white glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.02) 0%, transparent 70%)" }}
                />

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-border/50 bg-muted/30 transition-colors">
                  <cat.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground font-mono">
                  {cat.title}
                </h3>

                {/* Skills List with Progress Bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group/item flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 font-medium font-sans">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-border/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-muted-foreground/35"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Marquee Tech Pills */}
        <AnimatedSection delay={0.2}>
          <div className="relative mb-14 overflow-hidden py-2">
            <div className="flex gap-3 marquee-track">
              {[...allTechs, ...allTechs].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono text-muted-foreground border border-border/40 backdrop-blur-md hover:border-primary/20 hover:text-foreground transition-all duration-300 cursor-default shadow-sm"
                  style={{ background: "hsl(var(--card) / 0.3)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(90deg, hsl(var(--background)), transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(270deg, hsl(var(--background)), transparent)" }} />
          </div>
        </AnimatedSection>

        {/* Coding Platforms */}
        <AnimatedSection delay={0.35}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-border/50 bg-muted/30">
              <Trophy className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground font-sans">Coding Platforms</h3>
              <p className="text-xs text-muted-foreground font-mono">where I practice & compete</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {codingPlatforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-xl p-5 block overflow-hidden border border-border/40 glass-card glass-card-hover transition-all duration-300"
              >
                {/* Subtle top-edge glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.02) 0%, transparent 75%)" }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-border/50 bg-muted/20">
                    <platform.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                </div>

                {/* Platform name */}
                <div className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {platform.name}
                </div>

                {/* Achievement */}
                <div className="text-xs text-muted-foreground font-mono mb-3">
                  {platform.achievement}
                </div>

                {/* Tag pill */}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border border-border/50 text-muted-foreground bg-background/50">
                  {platform.tag}
                </span>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl bg-border" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
