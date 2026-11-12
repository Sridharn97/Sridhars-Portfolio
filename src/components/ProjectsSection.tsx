import { useState, useRef, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Cpu,
  Lock,
  ArrowUpRight,
  LayoutGrid,
  Tv,
  Star,
  Check
} from "lucide-react";

/* -------------------------------------------------------------
   TYPES & PROJECTS DATA
   ------------------------------------------------------------- */
interface Project {
  id: string;
  title: string;
  category: "MERN Stack" | "Next.js / React" | "Python & AI";
  badge: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
  domainUrl: string;
}

const projects: Project[] = [
  {
    id: "scholarquest",
    title: "ScholarQuest",
    category: "Next.js / React",
    badge: "AI-POWERED PLATFORM",
    description:
      "An intelligent, AI-powered scholarship discovery and application management ecosystem. Features personalized profile-based matching analyzing 40+ student metrics, real-time eligibility checks, and a smart Kanban-style deadline tracker.",
    tags: ["Next.js", "React", "AI Matching", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/ScholarQuest",
    demo: "https://scholar-quest-ten.vercel.app/",
    featured: true,
    domainUrl: "scholar-quest-ten.vercel.app",
  },
  {
    id: "fitverse",
    title: "FitVerse",
    category: "MERN Stack",
    badge: "FULL-STACK ECOSYSTEM",
    description:
      "A premium fitness tracking and health intelligence ecosystem featuring secure JWT authentication, intuitive dashboard analytics, workout telemetry, diet scheduling, interactive progress charts, and a vibrant community forum.",
    tags: ["MERN Stack", "JWT Auth", "Chart.js", "MongoDB", "Express.js"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/FitVerse",
    featured: true,
    domainUrl: "github.com/Sridharn97/FitVerse",
  },
  {
    id: "learnassess",
    title: "LearnAsses",
    category: "MERN Stack",
    badge: "EDUCATION TECH",
    description:
      "An intelligent learning assessment and evaluation engine that empowers educators and students with interactive quizzes, real-time progress tracking, and deep algorithmic performance analytics.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/LearnAssess",
    domainUrl: "github.com/Sridharn97/LearnAssess",
  },
  {
    id: "faq-tool",
    title: "Company FAQ Resource Tool",
    category: "Next.js / React",
    badge: "ENTERPRISE KNOWLEDGE",
    description:
      "A high-performance Next.js-powered knowledge base designed for enterprises. Enables seamless creation, hierarchical organization, and instant fuzzy search across internal organizational FAQs.",
    tags: ["Next.js", "React", "Node.js", "Instant Search"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Company-Resorce-FAQ-Tool",
    domainUrl: "github.com/Sridharn97/Company-Resorce-FAQ-Tool",
  },
  {
    id: "prototvalidate",
    title: "PrototValidate",
    category: "MERN Stack",
    badge: "PROTOTYPE VALIDATION",
    description:
      "A collaborative software prototype validation platform allowing developers, founders, and product teams to deploy test concepts, gather telemetry, and validate ideas through real-time feedback loops.",
    tags: ["React", "MongoDB", "Express.js", "Node.js", "Webhooks"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Project-Idea-Validator",
    domainUrl: "github.com/Sridharn97/Project-Idea-Validator",
  },
  {
    id: "course-analyzer",
    title: "Course Analyzer Platform",
    category: "Python & AI",
    badge: "DATA ANALYTICS",
    description:
      "A data-driven analytics engine built to evaluate student academic performance metrics, generating actionable recommendations, statistical trends, and predictive course planning reports.",
    tags: ["Python", "Streamlit", "Pandas", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Student-Course-Analyzer-Platform",
    domainUrl: "github.com/Sridharn97/Student-Course-Analyzer-Platform",
  },
];

/* -------------------------------------------------------------
   3D TILT INTERACTIVE BROWSER WINDOW PROJECT CARD
   ------------------------------------------------------------- */
const ModernProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt spring physics
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
    <div style={{ perspective: "1200px" }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="solid-card border-2 border-white/10 hover:border-cyan-400/40 p-0 h-full flex flex-col justify-between overflow-hidden shadow-2xl group transition-all duration-300 bg-gradient-to-br from-[#0c1017] via-[#090d14] to-[#0f1422]"
      >
        {/* Top Browser Chassis Chrome Bar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Browser URL Bar */}
          <div className="flex-1 max-w-[280px] bg-slate-900 border border-white/10 rounded-md px-3 py-1 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 truncate">
            <Lock size={10} className="text-cyan-400 shrink-0" />
            <span className="truncate">{project.domainUrl}</span>
          </div>

          {/* Badge */}
          <span className="text-[9px] font-mono font-bold text-cyan-300 uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 shrink-0 hidden sm:inline-block">
            {project.category}
          </span>
        </div>

        {/* Image Preview Canvas with Zoom & Live Badge */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 group/image">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent opacity-90" />

          {/* Floating Category / Live Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-white/10 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest shadow-lg backdrop-blur-md">
              {project.badge}
            </span>
            {project.demo && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest shadow-lg backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>LIVE</span>
              </span>
            )}
          </div>

          {/* Quick Hover Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl hover:bg-cyan-400 transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl hover:border-cyan-400 transition-colors"
            >
              <Github size={14} />
              <span>Source</span>
            </a>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight flex items-center justify-between group-hover:text-cyan-300 transition-colors">
              <span>{project.title}</span>
              <Sparkles size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Physical 3D Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-secondary px-4 py-2.5 font-mono text-xs tracking-wider flex-1 flex items-center justify-center gap-2 uppercase font-bold"
            >
              <Github size={15} />
              <span>GITHUB</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-primary px-4 py-2.5 font-mono text-xs tracking-wider flex-1 flex items-center justify-center gap-2 uppercase font-bold"
              >
                <ExternalLink size={15} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------
   INTERACTIVE SPOTLIGHT THEATRE VIEW
   ------------------------------------------------------------- */
const SpotlightTheatre = ({
  selectedProject,
  onSelectProject,
}: {
  selectedProject: Project;
  onSelectProject: (p: Project) => void;
}) => {
  return (
    <div className="space-y-6">
      {/* Featured Big Stage Display */}
      <div className="solid-card border-2 border-cyan-400/40 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#0f1728] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Information (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40">
                {selectedProject.badge}
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-white/10 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
              {selectedProject.demo && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/40 text-xs font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE READY</span>
                </span>
              )}
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 flex-wrap">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-secondary px-6 py-3 font-mono text-xs tracking-wider flex items-center gap-2 uppercase font-bold"
              >
                <Github size={16} />
                <span>EXPLORE SOURCE CODE</span>
              </a>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-primary px-6 py-3 font-mono text-xs tracking-wider flex items-center gap-2 uppercase font-bold"
                >
                  <ExternalLink size={16} />
                  <span>LAUNCH LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Live Interactive Mock Frame (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border-2 border-white/15 bg-slate-950 overflow-hidden shadow-2xl group">
              {/* Browser Header */}
              <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-md border border-white/10 truncate max-w-[240px]">
                  <Lock size={11} className="text-cyan-400" />
                  <span className="truncate">{selectedProject.domainUrl}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">PREVIEW</span>
              </div>

              {/* Image Frame */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Project Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {projects.map((p) => {
          const isCurrent = p.id === selectedProject.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectProject(p)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                isCurrent
                  ? "bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] scale-102"
                  : "bg-slate-950/70 border-white/10 hover:border-white/30 hover:bg-slate-900/60"
              }`}
            >
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">
                {p.category}
              </span>
              <span className="text-xs font-bold text-white block truncate">{p.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   MAIN PROJECTS SECTION EXPORT
   ------------------------------------------------------------- */
export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "spotlight">("grid");
  const [spotlightProject, setSpotlightProject] = useState<Project>(projects[0]);

  const categories = ["All", "Next.js / React", "MERN Stack", "Python & AI"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low-Contrast Background Typography */}
      <div className="bg-giant-text">PROJECTS</div>

      <div className="section-divider-dimensional mb-16 md:mb-20" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header & Controls */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-2">
                <Cpu size={14} className="text-cyan-400" />
                <span>05 / PRODUCTION SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase max-w-3xl">
                FEATURED <span className="text-gradient">ENGINEERING PROJECTS</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
                Full-stack applications, intelligent AI algorithms, and production architectures engineered for scale.
              </p>
            </div>

            {/* View Mode Switcher + Filter Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* View Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-white/10 gap-1 text-xs font-mono shadow-md">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold ${
                    viewMode === "grid"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <LayoutGrid size={13} />
                  <span>Bento Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("spotlight")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold ${
                    viewMode === "spotlight"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Tv size={13} />
                  <span>Spotlight</span>
                </button>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 shadow-md">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all uppercase ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dynamic Project Presentation Canvas */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {filteredProjects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.08} className="h-full">
                  <ModernProjectCard project={project} />
                </AnimatedSection>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="spotlight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightTheatre
                selectedProject={spotlightProject}
                onSelectProject={setSpotlightProject}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
