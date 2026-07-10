import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Layers, ArrowRight, Sparkles } from "lucide-react";

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
    title: "Recipe & Meal Planner",
    category: "Python & Java",
    description: "A robust console-based application architected for managing complex recipes and nutritional tracking. Features intelligent meal scheduling and sophisticated ingredient management algorithms.",
    tags: ["Java", "MySQL"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=800&fit=crop",
    github: "https://github.com/Sridharn97/Online-Recipe-Manangement-System-and-MealPlanner",
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group relative`}
    >
      
      {/* 3D Image Presentation */}
      <div className="w-full lg:w-3/5 perspective-1000 relative" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu pointer-events-none" />
        
        <motion.div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-3xl overflow-hidden glass-card aspect-video cursor-crosshair ai-circuit-corners shadow-2xl z-10"
        >
          {/* Parallax Image */}
          <motion.div 
            style={{ y: yImage, scale: 1.15 }}
            className="w-full h-full origin-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 pointer-events-none" />
          <div className="ai-scan-overlay" />
          
          {/* Floating Category Badge (Glassmorphic) */}
          <motion.div 
            style={{ translateZ: "40px" }}
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full glass border-glow text-xs font-mono font-bold tracking-widest uppercase text-foreground z-20 shadow-lg pointer-events-none"
          >
            <Layers className="w-3.5 h-3.5 text-primary" />
            {project.category}
          </motion.div>

          {/* View Links Overlay (Enhanced) */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 z-30">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-primary/50 text-foreground glass hover:bg-primary/20 text-sm font-bold font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
            >
              <Github size={18} /> Code
            </motion.a>
            {project.demo && (
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.6)]"
              >
                <ExternalLink size={18} /> Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Project Info (Bento-style layout feeling) */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center relative">
        {/* Subtle background element */}
        <div className="absolute -z-10 top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight flex items-center gap-3">
          {project.title}
          <Sparkles className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
        </h3>
        
        <div className="glass-card p-6 rounded-2xl mb-8 relative overflow-hidden group/desc">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/desc:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <p className="text-muted-foreground text-lg leading-relaxed font-sans relative z-10">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-2 text-xs font-mono font-bold tracking-widest text-muted-foreground glass border border-border/50 rounded-lg hover:border-primary/50 hover:text-primary transition-all cursor-default shadow-sm magnetic-hover hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="group/btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold font-mono uppercase tracking-widest text-foreground bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
          >
            Explore Project 
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "MERN Stack", "Next.js / React", "Python & Java"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative scroll-mt-24 bg-background overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 neural-grid opacity-30 pointer-events-none" />
      
      <div className="section-divider mb-16 relative z-10" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <AnimatedSection className="flex-1">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 glass px-4 py-1.5 rounded-full shadow-sm w-fit inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl border border-border/40 glass-card shadow-lg w-fit relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-xl pointer-events-none" />
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-5 py-2.5 text-xs font-bold font-mono uppercase rounded-xl tracking-wider transition-all duration-300 ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-project-category"
                        className="absolute inset-0 rounded-xl bg-primary z-0 shadow-[0_0_15px_rgba(var(--primary),0.6)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Cinematic Projects List */}
        <div className="flex flex-col gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

