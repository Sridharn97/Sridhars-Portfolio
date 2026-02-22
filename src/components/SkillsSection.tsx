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
  },
  {
    name: "HackerRank",
    achievement: "5★ in Python",
    url: "https://www.hackerrank.com/profile/sridhar_n2023cse",
    icon: Star,
    tag: "Python",
  },
  {
    name: "CodeChef",
    achievement: "2★ Rating",
    url: "https://www.codechef.com/users/sridhar94",
    icon: Globe,
    tag: "Competitive",
  },
  {
    name: "SkillRack",
    achievement: "Advanced Level",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=484312&key=54fc07d910a00431ded128655b8128a617cdc05f",
    icon: Database,
    tag: "Problem Solving",
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
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
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
                whileHover={{ y: -8, borderColor: "hsl(0 0% 30%)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl p-5 h-full relative group cursor-default border border-border ai-circuit-corners"
                style={{ background: "hsl(0 0% 6%)" }}
              >
                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay">
                  <div className="ai-scan-line" />
                </div>

                {/* Subtle white glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(0 0% 100% / 0.03) 0%, transparent 70%)" }}
                />

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-border bg-muted tech-glitch-hover">
                  <cat.icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-foreground">
                  {cat.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group/item flex items-center gap-2.5">
                      <div className="h-px w-2 bg-border group-hover/item:w-3 group-hover/item:bg-foreground/50 transition-all duration-300" />
                      <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Marquee Tech Pills */}
        <AnimatedSection delay={0.2}>
          <div className="relative mb-14 overflow-hidden">
            <div className="flex gap-3 marquee-track">
              {[...allTechs, ...allTechs].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-mono text-muted-foreground border border-border whitespace-nowrap"
                  style={{ background: "hsl(0 0% 6%)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(90deg, hsl(0 0% 3%), transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(270deg, hsl(0 0% 3%), transparent)" }} />
          </div>
        </AnimatedSection>

        {/* Coding Platforms */}
        <AnimatedSection delay={0.35}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-border bg-muted">
              <Trophy className="w-4 h-4 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Coding Platforms</h3>
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
                whileHover={{ y: -5, borderColor: "hsl(0 0% 30%)" }}
                className="group relative rounded-xl p-5 block overflow-hidden border border-border ai-circuit-corners"
                style={{ background: "hsl(0 0% 6%)" }}
              >
                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay opacity-0 group-hover:opacity-100">
                  <div className="ai-scan-line" style={{ animationDuration: '4s' }} />
                </div>

                {/* Subtle top-edge glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(0 0% 100% / 0.04) 0%, transparent 70%)" }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-border bg-muted">
                    <platform.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                </div>

                {/* Platform name */}
                <div className="font-semibold text-foreground text-sm mb-1 group-hover:text-white transition-colors">
                  {platform.name}
                </div>

                {/* Achievement */}
                <div className="text-xs text-muted-foreground font-mono mb-3">
                  {platform.achievement}
                </div>

                {/* Tag pill */}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border border-border text-muted-foreground">
                  {platform.tag}
                </span>

                {/* Bottom accent bar — white */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 35%), transparent)" }}
                />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
