import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Code, Layout, Server, Cpu, Trophy, Wrench, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["JavaScript", "React", "Next.js", "HTML & CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    icon: Cpu,
    title: "Core CS",
    skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "System Design", "Computer Networks"],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: ["VS Code", "Git & GitHub", "Eclipse (Java)", "Canva", "Power BI", "Cursor"],
  },
];

const codingPlatforms = [
  { name: "LeetCode", achievement: "150+ Problems Solved", url: "https://leetcode.com/u/Sridhar_n09/" },
  { name: "HackerRank", achievement: "5 Stars in Python", url: "https://www.hackerrank.com/profile/sridhar_n2023cse" },
  { name: "CodeChef", achievement: "2★ Rating", url: "https://www.codechef.com/users/sridhar94" },
  { name: "SkillRack", achievement: "Advanced Level", url: "https://www.skillrack.com/faces/resume.xhtml?id=484312&key=54fc07d910a00431ded128655b8128a617cdc05f" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </AnimatedSection>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, borderColor: "hsl(0 0% 30%)" }}
                className="border border-border rounded-lg p-6 h-full transition-all duration-300"
              >
                <cat.icon className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Coding platforms */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-foreground" />
            <h3 className="text-xl font-bold text-foreground">Coding Platforms</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {codingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "hsl(0 0% 30%)" }}
                  className="border border-border rounded-lg p-5 transition-all duration-300 block hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-foreground font-semibold mb-1">{platform.name}</div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </div>
                  <div className="text-xs text-muted-foreground font-mono tracking-wider">{platform.achievement}</div>
                </motion.div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
