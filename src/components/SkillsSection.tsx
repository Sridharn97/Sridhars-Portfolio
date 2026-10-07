import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Trophy, Cpu, Orbit, Table } from "lucide-react";
import { TechUniverseCanvas } from "./3D/TechUniverseCanvas";

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
    hex: "#00f0ff",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
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
  { name: "LeetCode", achievement: "150+ Problems Solved", url: "https://leetcode.com/u/Sridhar_n09/", color: "#f59e0b" },
  { name: "HackerRank", achievement: "5★ Python Badge", url: "https://www.hackerrank.com/profile/sridhar_n2023cse", color: "#22c55e" },
  { name: "CodeChef", achievement: "2★ Rating", url: "https://www.codechef.com/users/sridhar94", color: "#f97316" },
  { name: "SkillRack", achievement: "Advanced Coding Profile", url: "https://www.skillrack.com/faces/resume.xhtml?id=484312&key=54fc07d910a00431ded128655b8128a617cdc05f", color: "#00f0ff" },
];

export const SkillsSection = () => {
  const [viewMode, setViewMode] = useState<"3d" | "table">("3d");
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; catTitle: string; hex: string; level: number } | null>(null);

  let atomicCounter = 1;

  return (
    <section id="skills" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">SKILLS</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & View Mode Switcher */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
                <Cpu size={14} /> 03 / TECHNICAL CONSTELLATION
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
                3D TECH <span className="text-gradient">UNIVERSE & ARSENAL</span>
              </h2>
            </div>

            {/* View Toggle (3D Universe vs Periodic Table) */}
            <div className="flex items-center p-1.5 rounded-xl solid-card-secondary border border-white/10">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                  viewMode === "3d"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Orbit size={16} />
                <span>3D UNIVERSE</span>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                  viewMode === "table"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Table size={16} />
                <span>PERIODIC TABLE</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          {viewMode === "3d" ? (
            <motion.div
              key="3d-mode"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="solid-card border border-white/10 mb-20 p-2 relative overflow-hidden"
            >
              <TechUniverseCanvas />
            </motion.div>
          ) : (
            <motion.div
              key="table-mode"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20"
            >
              {/* Periodic Table Layout */}
              <div className="lg:col-span-8 space-y-6">
                {skillCategories.map((cat, i) => (
                  <div key={cat.title} className="solid-card p-5 border border-white/10">
                    <div
                      className="text-xs font-mono font-bold tracking-widest uppercase mb-4 border-l-2 pl-3"
                      style={{ borderColor: cat.hex, color: cat.hex }}
                    >
                      {cat.title} MATRIX
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill) => {
                        const currentNum = atomicCounter++;
                        const isHovered = hoveredSkill?.name === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() =>
                              setHoveredSkill({
                                name: skill.name,
                                catTitle: cat.title,
                                hex: cat.hex,
                                level: skill.level,
                              })
                            }
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl solid-card-secondary border cursor-crosshair flex flex-col items-center justify-center relative transition-all duration-300 hover:scale-110"
                            style={{
                              borderColor: isHovered ? cat.hex : "rgba(255, 255, 255, 0.1)",
                              boxShadow: isHovered ? `0 0 20px ${cat.hex}80` : "none",
                            }}
                          >
                            <span className="absolute top-1 left-1.5 text-[8px] font-mono opacity-50 text-white">
                              {currentNum}
                            </span>
                            <span className="text-xl sm:text-2xl font-bold font-mono" style={{ color: cat.hex }}>
                              {getSymbol(skill.name)}
                            </span>
                            <span className="text-[8px] font-mono text-slate-300 tracking-tighter truncate w-11/12 text-center mt-1">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Inspector Side Card */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="solid-card p-6 border border-white/10 min-h-[220px] flex flex-col justify-center">
                  {hoveredSkill ? (
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                        {hoveredSkill.catTitle} ELEMENT
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-4">{hoveredSkill.name}</h3>
                      <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                        <span>Proficiency Index</span>
                        <span style={{ color: hoveredSkill.hex }}>{hoveredSkill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${hoveredSkill.level}%`, backgroundColor: hoveredSkill.hex }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center font-mono text-xs text-slate-400">
                      HOVER AN ELEMENT TO INSPECT PROFICIENCY
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Isotopes Platforms */}
        <AnimatedSection delay={0.4}>
          <div className="solid-card p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Trophy className="text-cyan-400" size={22} />
              <h3 className="text-xl font-bold font-mono uppercase text-white tracking-widest">
                ACTIVE CODING PLATFORMS & COMPETITIVE PROFILES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solid-card-secondary p-4 border border-white/10 hover:border-cyan-400 hover:scale-105 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {platform.name}
                      </div>
                      <div className="text-xs font-mono text-slate-400">{platform.achievement}</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-cyan-300" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default SkillsSection;
