import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
  Trophy,
  Briefcase,
  Layout,
  Server,
  Brain,
  User,
  ArrowUpRight
} from "lucide-react";

/* -------------------------------------------------------------
   EDUCATION DATA
   ------------------------------------------------------------- */
const educationList = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E — Computer Science & Engineering",
    score: "CGPA: 7.82",
    year: "2023 – 2027",
    status: "In Progress",
    highlights: ["Data Structures & Algorithms", "System Design", "Database Systems", "Computer Networks"],
    isCurrent: true,
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "HSC — Higher Secondary Certificate",
    score: "89.67%",
    year: "2021 – 2023",
    status: "Completed",
    highlights: ["Physics, Chemistry, Maths & Computer Science"],
    isCurrent: false,
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "SSLC — Secondary School Leaving Certificate",
    score: "Pass",
    year: "2020 – 2021",
    status: "Completed",
    highlights: ["General High School Curriculum"],
    isCurrent: false,
  },
];

/* -------------------------------------------------------------
   PILLARS DATA
   ------------------------------------------------------------- */
const pillars = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Designing responsive, accessible, and interactive user interfaces with attention to typography, micro-animations, and fluid 60 FPS performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#00f0ff",
  },
  {
    icon: Server,
    title: "Backend & Databases",
    desc: "Architecting reliable REST APIs, database schemas, secure authentication, and seamless communication between server and client applications.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "#a855f7",
  },
  {
    icon: Brain,
    title: "Algorithmic Mindset",
    desc: "Applying strong fundamentals in data structures, time complexity analysis, and object-oriented design to craft clean, maintainable code.",
    tech: ["Data Structures", "Algorithms", "Java", "Python"],
    color: "#f59e0b",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative scroll-mt-20 overflow-hidden z-10">
      {/* Subtle Low-Contrast Giant Background Typography */}
      <div className="bg-giant-text">ABOUT</div>

      <div className="section-divider-dimensional mb-12 md:mb-16" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 border border-cyan-400/30 bg-slate-950/80 px-3.5 py-1 rounded-full shadow-sm inline-flex items-center gap-2">
              <User size={13} className="text-cyan-400" />
              <span>01 / ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              WHO I AM & <span className="text-gradient">WHAT I DO</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
              Full-Stack Developer crafting responsive, performant web applications with clean design and solid engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Top Section: Compact Bio Card + 4 Quick Stat Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8 items-stretch">
          {/* Left: Clean Bio Card (7 Cols) */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 h-full">
            <div className="solid-card p-6 sm:p-7 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0e131d] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for Roles & Internships</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono">
                    <MapPin size={12} className="text-cyan-400" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Primary Bio Statement */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                  Bridging creative frontend design with robust full-stack engineering.
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
                  I am a Computer Science & Engineering undergraduate at <strong className="text-white font-semibold">Sri Eshwar College of Engineering</strong>.
                  I enjoy turning complex problems into intuitive, high-performance web applications that look sharp and work flawlessly across devices.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                  My workflow centers on modern web technologies including React, Next.js, Node.js, and MongoDB, paired with a disciplined focus on algorithmic problem solving, clean component architecture, and responsive UI design.
                </p>
              </div>

              {/* Core Strength Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider mr-1">Focus:</span>
                {[
                  "Full-Stack Web",
                  "React & Next.js",
                  "RESTful APIs",
                  "Data Structures",
                  "Responsive UI",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-slate-300 font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: 4 Compact Stat Tiles (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Stat 1: LeetCode */}
            <AnimatedSection delay={0.15} className="h-full">
              <motion.a
                href="https://leetcode.com/u/Sridhar_n09/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                className="solid-card p-5 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] group cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
                    <Trophy size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-amber-300 transition-colors">
                    150+
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">LeetCode Solved</div>
                  <div className="text-[11px] text-slate-400 font-sans mt-1">Problem solving & DSA</div>
                </div>
              </motion.a>
            </AnimatedSection>

            {/* Stat 2: Academics */}
            <AnimatedSection delay={0.2} className="h-full">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="solid-card p-5 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors mb-2">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-cyan-300 transition-colors">
                    7.82
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">CGPA in B.E</div>
                  <div className="text-[11px] text-slate-400 font-sans mt-1">Computer Science & Eng.</div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Stat 3: Internships & Training */}
            <AnimatedSection delay={0.25} className="h-full">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="solid-card p-5 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors mb-2">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-emerald-300 transition-colors">
                    3+
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">Intern & Training</div>
                  <div className="text-[11px] text-slate-400 font-sans mt-1">ISAII AI, Algotutor, etc.</div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Stat 4: Development Philosophy */}
            <AnimatedSection delay={0.3} className="h-full">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="solid-card p-5 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:border-purple-400 transition-colors mb-2">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-purple-300 transition-colors">
                    100%
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">Clean & Responsive</div>
                  <div className="text-[11px] text-slate-400 font-sans mt-1">Pixel-perfect engineering</div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Section: 3 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 items-stretch">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={0.15 + idx * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="solid-card p-6 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-br from-[#0b0f16] to-[#080c12] group hover:border-cyan-400/30 transition-all"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 border"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}35`,
                        color: item.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Section: Education & Qualifications */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-2">
              ACADEMIC BACKGROUND
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              EDUCATION & <span className="text-gradient">QUALIFICATIONS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* College Hero Card (2 cols) */}
            <div className="md:col-span-2 solid-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0e131d]">
              <div className="flex justify-between items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{educationList[0].status}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {educationList[0].year}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {educationList[0].institution}
                </h4>
                <p className="text-slate-300 text-sm font-medium mb-3">
                  {educationList[0].degree}
                </p>

                {/* Coursework Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {educationList[0].highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-slate-300 font-sans"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center rounded-lg bg-slate-900/90 px-3.5 py-2 border border-cyan-400/30 shadow-inner">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2.5">
                    Score:
                  </span>
                  <span className="text-base font-bold font-mono text-cyan-300">
                    {educationList[0].score}
                  </span>
                </div>
              </div>
            </div>

            {/* School Cards (1 col) */}
            <div className="flex flex-col gap-4">
              {educationList.slice(1).map((item) => (
                <div
                  key={item.degree}
                  className="solid-card p-5 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-[#0a0e15] to-[#070b10] hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-cyan-400 tracking-wider bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle2 size={12} />
                      <span>Completed</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white mb-0.5">{item.institution}</h5>
                    <p className="text-xs text-slate-400 mb-2">{item.degree}</p>
                    <span className="inline-block text-xs font-mono font-bold text-cyan-300 bg-slate-950 px-2.5 py-1 rounded border border-cyan-400/25">
                      Score: {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
