import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Layers, ArrowRight, Sparkles, Cpu } from "lucide-react";

interface Project {
  title: string;
  category: "MERN Stack" | "Next.js / React" | "Python & Java";
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "FitVerse",
    category: "MERN Stack",
    description: "A premium fitness tracking ecosystem featuring secure JWT authentication, intuitive dashboard analytics, and workout tracking. Built with comprehensive diet management, interactive progress charts, and a vibrant community forum for enthusiast engagement.",
    tags: ["MERN Stack", "JWT", "Charts.js", "Community Forum"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/FitVerse",
  },
  {
    title: "LearnAsses",
    category: "MERN Stack",
    description: "An intelligent learning assessment platform that empowers educators and students with interactive quizzes, real-time progress tracking, and deep performance analytics.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/LearnAssess",
  },
  {
    title: "Company FAQ Resource Tool",
    category: "Next.js / React",
    description: "A high-performance Next.js-powered knowledge base system designed for enterprises. Enables seamless creation, organization, and management of frequently asked questions with instant search functionality.",
    tags: ["Next.js", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Company-Resorce-FAQ-Tool",
  },
  {
    title: "PrototValidate",
    category: "MERN Stack",
    description: "A collaborative prototype validation platform. Allows product teams and developers to create, test, and validate software prototypes with real-time feedback loops.",
    tags: ["React", "MongoDB", "Express.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Project-Idea-Validator",
  },
  {
    title: "ScholarQuest",
    category: "Next.js / React",
    description: "An intelligent, AI-powered scholarship discovery and application management platform. Features personalized profile-based matching algorithms analyzing 40+ student data points, instant eligibility verification, and a smart Kanban-style deadline tracker.",
    tags: ["Next.js", "React", "AI Matching", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/ScholarQuest",
    demo: "https://scholar-quest-ten.vercel.app/",
  },
  {
    title: "Course Analyzer Platform",
    category: "Python & Java",
    description: "A data-driven platform built to analyze student performance metrics. Generates actionable insights and algorithmic recommendations for optimal course selection and academic planning.",
    tags: ["Python", "Streamlit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Student-Course-Analyzer-Platform",
  },
];

const Solid3DProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Motion Physics Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Multi Z-Depth Transformations
  const titleZ = useTransform(mouseXSpring, [-0.5, 0.5], ["30px", "50px"]);
  const imageZ = useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "40px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
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
        data-cursor="project"
        className={`solid-card p-8 sm:p-10 border border-white/10 flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-10 lg:gap-14 group transition-shadow duration-500 hover:border-cyan-400/50 project-card-3d`}
      >
        {/* Layer 2: 3D Image Frame */}
        <motion.div
          style={{ translateZ: imageZ }}
          className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-white/15 bg-slate-950 relative shadow-2xl group-hover:border-cyan-400/60 transition-colors"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />

          {/* Solid Category Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md solid-card-secondary border border-cyan-400/40 font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
            <Layers size={14} />
            <span>{project.category}</span>
          </div>
        </motion.div>

        {/* Layer 3 & 4: Title, Information & Badges */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              PROJECT // 0{index + 1}
            </span>

            {/* Title with Z-shift */}
            <motion.h3
              style={{ translateZ: titleZ }}
              className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight flex items-center gap-3"
            >
              {project.title}
              <Sparkles className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </motion.h3>

            <div className="solid-card-secondary p-5 border border-white/10 mb-6">
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Layer 4: Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300 font-bold tracking-wider uppercase shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Layer 5: Physical 3D Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-primary px-6 py-3 font-mono text-xs tracking-wider flex items-center gap-2 uppercase"
            >
              <Github size={16} />
              <span>EXPLORE CODE</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-secondary px-6 py-3 font-mono text-xs tracking-wider flex items-center gap-2 uppercase"
              >
                <ExternalLink size={16} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "MERN Stack", "Next.js / React", "Python & Java"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">PROJECTS</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <AnimatedSection>
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
              <Cpu size={14} /> 05 / FEATURED SHOWCASE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              FEATURED <span className="text-gradient">ENGINEERING PROJECTS</span>
            </h2>
          </AnimatedSection>

          {/* Category Filter Pills (Solid Surface) */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl solid-card-secondary border border-white/10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all uppercase ${
                      isActive
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* 3D Projects Showcase List */}
        <div className="flex flex-col gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Solid3DProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
