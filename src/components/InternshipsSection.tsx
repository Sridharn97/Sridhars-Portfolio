import { useState, useRef, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Clock,
  ShieldCheck,
  Code2
} from "lucide-react";

/* -------------------------------------------------------------
   EXPERIENCE DATA (CLEAR, READABLE & AUTHENTIC)
   ------------------------------------------------------------- */
interface ExperienceItem {
  id: string;
  type: "professional" | "training";
  badge: string;
  company: string;
  role: string;
  period: string;
  year: string;
  status: "Active" | "Completed";
  img?: string;
  summary: string;
  deliverables: string[];
  skills: string[];
  accent: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "isaii",
    type: "professional",
    badge: "01 // INDUSTRY INTERNSHIP",
    company: "ISAII AI",
    role: "Full Stack Developer Intern",
    period: "Oct 2025 — Mar 2026",
    year: "2025 – 2026",
    status: "Completed",
    img: "/ISAII.jpeg",
    summary:
      "Spearheading frontend development and full-stack integration for modern AI-driven web systems, collaborating directly with senior engineers in fast-paced agile development sprints.",
    deliverables: [
      "Developed and optimized high-performance, responsive UI components using Next.js and React.js.",
      "Integrated backend cloud services, authentication workflows, and relational data with Supabase.",
      "Conducted rigorous API testing and endpoint validation using Postman.",
      "Participated actively in team code reviews, sprint planning, and rapid feature deployments.",
    ],
    skills: ["Next.js", "React.js", "Supabase", "Postman", "REST APIs", "Agile Sprints"],
    accent: "#00f0ff",
  },
  {
    id: "algotutor",
    type: "training",
    badge: "02 // ADVANCED ARCHITECTURE",
    company: "Algotutor",
    role: "Modern Full-Stack Systems Training",
    period: "2025",
    year: "2025",
    status: "Completed",
    summary:
      "Intensive hands-on engineering training focused on building scalable, production-ready web applications using Next.js Server-Side Rendering (SSR) and full-stack architectural design.",
    deliverables: [
      "Engineered full-stack web applications utilizing Next.js Server-Side Rendering (SSR) and API routes.",
      "Implemented resilient data persistence models, indexing, and aggregation pipelines with MongoDB.",
      "Optimized client-server state transitions and end-to-end data communication.",
    ],
    skills: ["Next.js", "React.js", "JavaScript", "MongoDB", "REST APIs", "SSR Architecture"],
    accent: "#a855f7",
  },
  {
    id: "better-tomorrow",
    type: "training",
    badge: "03 // MERN ECOSYSTEM",
    company: "Better Tomorrow",
    role: "MERN Stack Engineering Program",
    period: "2025",
    year: "2025",
    status: "Completed",
    summary:
      "Specialized engineering program focused on the MERN stack ecosystem, developing robust RESTful backend services, secure authentication, and responsive client applications.",
    deliverables: [
      "Acquired hands-on experience building full-stack MERN (MongoDB, Express, React, Node.js) web apps.",
      "Engineered secure, modular RESTful APIs using Express.js and Node.js with token-based authentication.",
      "Managed relational and document data interactions with MongoDB and Mongoose schemas.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "CRUD Systems"],
    accent: "#10b981",
  },
];

/* -------------------------------------------------------------
   3D TILT INTERACTIVE EXPERIENCE CARD (100% READABLE)
   ------------------------------------------------------------- */
const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

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

  const isProfessional = item.type === "professional";

  return (
    <div style={{ perspective: "1200px" }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`solid-card p-6 sm:p-7 md:p-8 h-full flex flex-col justify-between border relative overflow-hidden transition-all duration-300 group shadow-xl ${
          isProfessional
            ? "border-cyan-400/40 bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#0f1728]"
            : "border-white/10 bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0e131d]"
        }`}
      >
        {/* Holographic Laser Corner Accents */}
        <div
          className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 pointer-events-none"
          style={{ borderColor: item.accent }}
        />
        <div
          className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 pointer-events-none"
          style={{ borderColor: item.accent }}
        />
        <div
          className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 pointer-events-none"
          style={{ borderColor: item.accent }}
        />
        <div
          className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 pointer-events-none"
          style={{ borderColor: item.accent }}
        />

        {/* Ambient Glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500"
          style={{ backgroundColor: item.accent }}
        />

        <div>
          {/* Top Bar: Badge, Year & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <span
              className="text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full border"
              style={{
                backgroundColor: `${item.accent}15`,
                borderColor: `${item.accent}40`,
                color: item.accent,
              }}
            >
              {item.badge}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300 bg-slate-900 border border-white/10 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
                <Calendar size={12} className="text-cyan-400" />
                <span>{item.period}</span>
              </span>

              {item.status === "Active" ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>ACTIVE</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 size={12} />
                  <span>COMPLETED</span>
                </span>
              )}
            </div>
          </div>

          {/* Company Identity & Role */}
          <div className="flex items-start gap-4 mb-4">
            {/* Logo or Icon Box */}
            <div
              className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center p-2 shrink-0 bg-slate-950/80 shadow-lg"
              style={{ borderColor: `${item.accent}50` }}
            >
              {item.img ? (
                <img src={item.img} alt={item.company} className="w-full h-full object-contain rounded-xl" />
              ) : isProfessional ? (
                <Briefcase size={26} style={{ color: item.accent }} />
              ) : (
                <GraduationCap size={26} style={{ color: item.accent }} />
              )}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                {item.company}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-slate-200 mt-0.5">
                {item.role}
              </p>
            </div>
          </div>

          {/* Executive Summary */}
          <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
            {item.summary}
          </p>

          {/* Key Deliverables Bullet Points */}
          <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/70 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold mb-1">
              KEY DELIVERABLES & CONTRIBUTIONS:
            </span>
            {item.deliverables.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-snug">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: item.accent }}
                />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-white/10">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
            TECHNOLOGIES & WORKFLOWS:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-200 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------
   MAIN INTERNSHIPS & EXPERIENCE SECTION EXPORT
   ------------------------------------------------------------- */
export const InternshipsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "professional" | "training">("all");

  const filteredExperiences = experiences.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <section id="internships" className="py-24 md:py-32 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low-Contrast Background Typography */}
      <div className="bg-giant-text">EXPERIENCE</div>

      <div className="section-divider-dimensional mb-16 md:mb-20" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-2">
              <Briefcase size={14} className="text-cyan-400" />
              <span>04 / EXPERIENCE & TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase max-w-4xl">
              PROFESSIONAL <span className="text-gradient">EXPERIENCE & INTERNSHIPS</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl font-sans leading-relaxed">
              Hands-on engineering contributions in industry production and specialized full-stack architecture programs.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex items-center bg-slate-900/90 border border-white/10 rounded-full p-1.5 gap-1.5 text-xs font-mono shadow-xl">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === "all"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All Records (3)
              </button>
              <button
                onClick={() => setActiveFilter("professional")}
                className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                  activeFilter === "professional"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase size={13} />
                <span>Industry Internships</span>
              </button>
              <button
                onClick={() => setActiveFilter("training")}
                className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                  activeFilter === "training"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap size={13} />
                <span>Systems Training</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} className="h-full">
                <ExperienceCard item={item} index={index} />
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
