import { useRef, MouseEvent as ReactMouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  GraduationCap,
  Cpu,
  CheckCircle2,
  MapPin,
  Layout,
  Server,
  Brain,
  User,
  ShieldCheck
} from "lucide-react";

/* -------------------------------------------------------------
   PILLARS DATA
   ------------------------------------------------------------- */
const pillars = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Designing responsive, accessible, and reactive interfaces with precision typography, micro-interactions, and fluid 60 FPS performance.",
    tech: ["React 19", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#00f0ff",
  },
  {
    icon: Server,
    title: "Backend & Systems",
    desc: "Architecting reliable REST APIs, database schemas, secure authentication, and seamless communication between server and client applications.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "#a855f7",
  },
  {
    icon: Brain,
    title: "Algorithmic Rigor",
    desc: "Applying strong fundamentals in data structures, time complexity analysis, and object-oriented design to craft clean, maintainable code.",
    tech: ["Data Structures", "Algorithms", "Java", "Python"],
    color: "#f59e0b",
  },
];

/* -------------------------------------------------------------
   3D TILT HOLOGRAPHIC DEGREE CARD (SRI ESHWAR COLLEGE)
   ------------------------------------------------------------- */
const HolographicDegreeChassis = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="solid-card border-2 border-cyan-500/30 p-6 sm:p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0f1422] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,240,255,0.15)] group"
      >
        {/* Holographic Laser Corner Notches */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

        {/* Ambient Cyan/Purple Glow Backlight */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/15 transition-all duration-700" />

        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* Rotating Orbital SVG Seal */}
            <div className="relative w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-md">
              <GraduationCap size={24} />
              <div className="absolute -inset-1 rounded-2xl border border-cyan-400/30 animate-[spin_16s_linear_infinite] pointer-events-none" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                01 // PRIMARY ACADEMIC DEGREE
              </span>
              <span className="text-xs font-mono text-slate-300">
                GRADUATION PROGRAM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>CURRENT ENROLLMENT (2023 – 2027)</span>
            </span>
          </div>
        </div>

        {/* Main Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block font-semibold">
              DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
            </span>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Sri Eshwar College of Engineering
            </h4>
            <p className="text-slate-200 text-base sm:text-lg font-medium">
              Bachelor of Engineering (B.E) in Computer Science & Engineering
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                <MapPin size={13} className="text-cyan-400" />
                <span>Coimbatore, Tamil Nadu</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-400/30 shadow-inner flex flex-col items-center justify-center text-center w-full max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-2 shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                DEGREE STATUS
              </span>
              <span className="text-sm font-bold text-white mt-0.5">
                ACTIVE PROGRAM
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">
                Class of 2023 – 2027
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------
   SECONDARY ACADEMIC CREDENTIALS (HSC & SSLC)
   ------------------------------------------------------------- */
const SecondaryHolographicCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
      {/* HSC Card */}
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="solid-card p-6 sm:p-7 border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] relative overflow-hidden group hover:border-purple-400/40 transition-all shadow-lg"
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-purple-400 tracking-wider bg-slate-900 px-3 py-1 rounded-md border border-white/10 font-bold">
            2021 – 2023
          </span>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 inline-flex items-center gap-1.5">
            <CheckCircle2 size={13} />
            <span>Completed</span>
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">
            02 // HIGHER SECONDARY
          </span>
          <h5 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
            Chavara Vidya Bhavan
          </h5>
          <p className="text-sm text-slate-300 mb-3 font-sans">
            Higher Secondary Certificate (HSC)
          </p>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Secondary Education</span>
            <span className="text-slate-300 font-bold">Verified Graduation</span>
          </div>
        </div>
      </motion.div>

      {/* SSLC Card */}
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="solid-card p-6 sm:p-7 border border-white/10 bg-gradient-to-br from-[#0c1017] to-[#090d14] relative overflow-hidden group hover:border-emerald-400/40 transition-all shadow-lg"
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-emerald-400 tracking-wider bg-slate-900 px-3 py-1 rounded-md border border-white/10 font-bold">
            2020 – 2021
          </span>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 inline-flex items-center gap-1.5">
            <CheckCircle2 size={13} />
            <span>Completed</span>
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-1">
            03 // SECONDARY SCHOOLING
          </span>
          <h5 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
            Chavara Vidya Bhavan
          </h5>
          <p className="text-sm text-slate-300 mb-3 font-sans">
            Secondary School Leaving Certificate (SSLC)
          </p>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Secondary School Education</span>
            <span className="text-slate-300 font-bold">Verified Graduation</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------
   MAIN ABOUT SECTION EXPORT
   ------------------------------------------------------------- */
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative scroll-mt-20 overflow-hidden z-10">
      {/* Giant Low-Contrast Background Typography */}
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

        {/* Top Section: Bio Card + 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14 items-stretch">
          {/* Bio Card (12 cols) */}
          <AnimatedSection delay={0.1} className="lg:col-span-12">
            <div className="solid-card p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0e131d] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for Roles & Internships</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono">
                    <MapPin size={12} className="text-cyan-400" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-3 py-1 rounded-full">
                  Full Stack Engineer & CS Undergrad
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                Bridging creative frontend design with robust full-stack engineering.
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans max-w-4xl">
                I am a Computer Science & Engineering undergraduate at <strong className="text-white font-semibold">Sri Eshwar College of Engineering</strong>.
                I focus on architecting modern, high-performance web systems across the full stack—from intuitive, accessible React and Next.js interfaces to reliable Node.js backends and optimized database architectures.
              </p>

              {/* 3 Core Strength Pillars Nested Cleanly */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl p-4 bg-slate-950/70 border border-white/5 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 border"
                          style={{
                            backgroundColor: `${item.color}15`,
                            borderColor: `${item.color}35`,
                            color: item.color,
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed mb-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* =============================================================
            EDUCATION & QUALIFICATIONS SECTION (STREAMLINED & INNOVATIVE)
            ============================================================= */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-2 border border-cyan-400/30 bg-slate-950 px-3.5 py-1 rounded-full shadow-sm inline-flex items-center gap-1.5">
              <Cpu size={12} className="text-cyan-400" />
              <span>02 / ACADEMIC REPOSITORY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              EDUCATION & <span className="text-gradient">QUALIFICATIONS</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-2 max-w-lg">
              Academic credentials and degree timeline presented with interactive 3D depth.
            </p>
          </div>

          {/* Main 3D Tilt Holographic Degree Chassis (Sri Eshwar College) */}
          <HolographicDegreeChassis />

          {/* Secondary Holographic Credential Cards (HSC & SSLC) */}
          <SecondaryHolographicCards />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
