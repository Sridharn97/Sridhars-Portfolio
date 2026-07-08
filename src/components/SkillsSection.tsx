import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Trophy } from "lucide-react";

// Helper to generate a 1-2 letter symbol for technologies
const getSymbol = (name: string) => {
  const custom: Record<string, string> = {
    "JavaScript": "Js", "TypeScript": "Ts", "Python": "Py", "React": "Re",
    "Next.js": "Nx", "Node.js": "No", "Express.js": "Ex", "MongoDB": "Mg",
    "MySQL": "My", "HTML & CSS": "Hc", "Git & GitHub": "Gt", "VS Code": "Vs",
    "Power BI": "Pb", "Canva": "Cv", "Cursor": "Cu", "Java": "Jv", "C++": "C+",
    "System Design": "Sd", "Networks": "Nw", "DBMS": "Db"
  };
  if (custom[name]) return custom[name];
  return name.substring(0, 2).charAt(0).toUpperCase() + name.substring(1, 2).toLowerCase();
};

const skillCategories = [
  {
    title: "Languages",
    color: "amber",
    hex: "#f59e0b",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    title: "Frontend",
    color: "cyan",
    hex: "#06b6d4",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    color: "green",
    hex: "#22c55e",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 72 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Core CS",
    color: "purple",
    hex: "#a855f7",
    skills: [
      { name: "DSA", level: 82 },
      { name: "DBMS", level: 75 },
      { name: "OS", level: 70 },
      { name: "Networks", level: 68 },
      { name: "System Design", level: 65 },
    ],
  },
  {
    title: "Tools",
    color: "rose",
    hex: "#f43f5e",
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
  { name: "LeetCode", achievement: "150+ Problems", url: "https://leetcode.com/u/Sridhar_n09/", color: "#f59e0b" },
  { name: "HackerRank", achievement: "5★ Python", url: "https://www.hackerrank.com/profile/sridhar_n2023cse", color: "#22c55e" },
  { name: "CodeChef", achievement: "2★ Rating", url: "https://www.codechef.com/users/sridhar94", color: "#f97316" },
  { name: "SkillRack", achievement: "Advanced", url: "https://www.skillrack.com/faces/resume.xhtml?id=484312&key=54fc07d910a00431ded128655b8128a617cdc05f", color: "#06b6d4" },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<{name: string, catTitle: string, hex: string, level: number} | null>(null);
  
  let atomicCounter = 1;

  return (
    <section id="skills" className="py-24 relative scroll-mt-24 overflow-hidden bg-background">
      <div className="section-divider mb-16" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm">
              — Arsenal
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The <span className="text-gradient">periodic table</span> of tech
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Hover over an element to reveal proficiency metrics and properties of my technical stack.
            </p>
          </div>
        </AnimatedSection>

        {/* Periodic Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Main Table */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-6">
              {skillCategories.map((cat, i) => (
                <AnimatedSection key={cat.title} delay={i * 0.1}>
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    {/* Category Label */}
                    <div className="md:w-32 flex-shrink-0">
                      <div 
                        className="text-xs font-mono font-bold tracking-widest uppercase border-l-2 pl-3 py-1"
                        style={{ borderColor: cat.hex, color: cat.hex }}
                      >
                        {cat.title}
                      </div>
                    </div>
                    
                    {/* Elements */}
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill) => {
                        const currentAtomicNumber = atomicCounter++;
                        const isHovered = hoveredSkill?.name === skill.name;
                        
                        return (
                          <motion.div
                            key={skill.name}
                            onHoverStart={() => setHoveredSkill({ name: skill.name, catTitle: cat.title, hex: cat.hex, level: skill.level })}
                            onHoverEnd={() => setHoveredSkill(null)}
                            whileHover={{ scale: 1.1, y: -4, zIndex: 50 }}
                            className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-lg cursor-crosshair transition-all duration-300 flex flex-col items-center justify-center border bg-background/50 backdrop-blur-sm"
                            style={{ 
                              borderColor: isHovered ? cat.hex : `${cat.hex}40`,
                              boxShadow: isHovered ? `0 0 20px ${cat.hex}60, inset 0 0 10px ${cat.hex}20` : 'none',
                              backgroundColor: isHovered ? `${cat.hex}10` : 'rgba(var(--background), 0.5)'
                            }}
                          >
                            {/* Atomic Number */}
                            <span className="absolute top-1 left-1.5 text-[8px] font-mono opacity-60">
                              {currentAtomicNumber}
                            </span>
                            {/* Atomic Weight (Level) */}
                            <span className="absolute top-1 right-1.5 text-[7px] font-mono opacity-50">
                              {(skill.level / 10).toFixed(1)}
                            </span>
                            
                            {/* Symbol */}
                            <span 
                              className="text-xl md:text-2xl font-bold font-serif leading-none mt-1 transition-colors duration-300"
                              style={{ color: isHovered ? cat.hex : 'inherit' }}
                            >
                              {getSymbol(skill.name)}
                            </span>
                            
                            {/* Full Name */}
                            <span className="absolute bottom-1.5 text-[8px] md:text-[9px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-11/12 text-center opacity-80">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Panel: Hover Inspector & Platforms */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Inspector Tooltip Display */}
            <AnimatedSection delay={0.5} className="h-48 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-xl p-6 flex flex-col justify-center relative overflow-hidden glass-card">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <div className="w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: hoveredSkill?.hex || 'var(--primary)' }} />
              </div>
              
              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: hoveredSkill.hex }}>
                      Element: {hoveredSkill.catTitle}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-4">
                      {hoveredSkill.name}
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-muted-foreground">Proficiency Base</span>
                        <span style={{ color: hoveredSkill.hex }}>{hoveredSkill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-border/40 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${hoveredSkill.level}%` }}
                          className="h-full"
                          style={{ backgroundColor: hoveredSkill.hex }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full text-muted-foreground"
                  >
                    <div className="w-12 h-12 border border-dashed border-border/60 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-xl font-serif opacity-30">?</span>
                    </div>
                    <p className="text-sm font-mono">Awaiting element selection...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>

            {/* Coding Platforms / Isotopes */}
            <AnimatedSection delay={0.6}>
              <div className="rounded-2xl border border-border/40 bg-card/10 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-widest text-foreground">Active Isotopes</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {codingPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl border border-border/30 hover:border-border hover:bg-muted/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ color: platform.color, backgroundColor: platform.color }}
                        />
                        <div>
                          <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{platform.name}</div>
                          <div className="text-[10px] text-muted-foreground font-mono">{platform.achievement}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
