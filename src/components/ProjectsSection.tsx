import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

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
    description: "A premium MERN stack fitness tracking app with secure JWT auth, intuitive dashboards, and workout tracking. Features comprehensive diet management, interactive progress charts with health metrics, and a vibrant community forum for enthusiast engagement.",
    tags: ["MERN Stack", "JWT", "Charts.js", "Community Forum"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/FitVerse",
  },
  {
    title: "LearnAsses",
    category: "MERN Stack",
    description: "A comprehensive MERN Stack learning assessment platform that provides interactive quizzes, progress tracking, and performance analytics for students and educators.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/LearnAssess",
  },
  {
    title: "Company FAQ Resource Tool",
    category: "Next.js / React",
    description: "A Next.js-powered FAQ management system for companies to create, organize, and manage frequently asked questions with search functionality and a user-friendly interface.",
    tags: ["Next.js", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Company-Resorce-FAQ-Tool",
  },
  {
    title: "PrototValidate",
    category: "MERN Stack",
    description: "A MERN Stack prototype validation platform that allows users to create, test, and validate software prototypes with real-time feedback and collaboration features.",
    tags: ["React", "MongoDB", "Express.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Project-Idea-Validator",
  },
  {
    title: "Online Recipe Management & Meal Planner",
    category: "Python & Java",
    description: "A Java and MySQL console-based application for managing recipes, meal planning, and nutritional tracking. Includes recipe storage, meal scheduling, and ingredient management.",
    tags: ["Java", "MySQL"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Online-Recipe-Manangement-System-and-MealPlanner",
  },
  {
    title: "Student Course Analyzer Platform",
    category: "Python & Java",
    description: "A Streamlit and Python-based platform for analyzing student course performance, generating insights, and providing recommendations for course selection and academic planning.",
    tags: ["Python", "Streamlit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Student-Course-Analyzer-Platform",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "MERN Stack", "Next.js / React", "Python & Java"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection className="flex-1">
            <p className="font-mono text-sm tracking-[0.3em] text-primary uppercase mb-4">
              — Selected Work
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </AnimatedSection>

          {/* Dynamic Filter Pills */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-border/40 bg-background/30 backdrop-blur-md w-fit">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-2 text-xs font-medium font-mono uppercase rounded-full tracking-wider transition-colors duration-300 ${
                      isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-project-category"
                        className="absolute inset-0 rounded-full bg-muted/80 z-0"
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

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group border border-border/40 rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative h-52 overflow-hidden bg-muted/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />

                    {/* Action Overlay */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-25">
                      <motion.a 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.96 }}
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted/40 text-xs font-mono uppercase tracking-wider transition-colors duration-300"
                      >
                        <Github size={14} /> Repository
                      </motion.a>
                      {project.demo && (
                        <motion.a 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.96 }}
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background hover:bg-foreground/90 text-xs font-mono uppercase tracking-wider transition-all duration-300 font-semibold"
                        >
                          <ExternalLink size={14} /> Demo
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FolderOpen className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] font-mono text-muted-foreground/80 uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed min-h-[72px] font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags bottom strip */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 text-[10px] font-mono tracking-wide text-muted-foreground bg-background/40 border border-border/50 rounded-md group-hover:border-border/80 group-hover:text-foreground transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
