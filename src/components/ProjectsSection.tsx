import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LearnAsses",
    description: "A comprehensive MERN Stack learning assessment platform that provides interactive quizzes, progress tracking, and performance analytics for students and educators.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/LearnAssess",
  },
  {
    title: "Company FAQ Resource Tool",
    description: "A Next.js-powered FAQ management system for companies to create, organize, and manage frequently asked questions with search functionality and a user-friendly interface.",
    tags: ["Next.js", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Company-Resorce-FAQ-Tool",
  },
  {
    title: "PrototValidate",
    description: "A MERN Stack prototype validation platform that allows users to create, test, and validate software prototypes with real-time feedback and collaboration features.",
    tags: ["React", "MongoDB", "Express.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Project-Idea-Validator",
  },
  {
    title: "Online Recipe Management & Meal Planner",
    description: "A Java and MySQL console-based application for managing recipes, meal planning, and nutritional tracking. Includes recipe storage, meal scheduling, and ingredient management.",
    tags: ["Java", "MySQL"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Online-Recipe-Manangement-System-and-MealPlanner",
  },
  {
    title: "Student Course Analyzer Platform",
    description: "A Streamlit and Python-based platform for analyzing student course performance, generating insights, and providing recommendations for course selection and academic planning.",
    tags: ["Python", "Streamlit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/Sridharn97/Student-Course-Analyzer-Platform",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16">
            Featured <span className="text-gradient">projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group border border-border rounded-lg overflow-hidden bg-card transition-all duration-500 hover:border-muted-foreground/30 ai-circuit-corners ai-glow-pulse"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                  {/* AI Scan Overlay */}
                  <div className="ai-scan-overlay">
                    <div className="ai-scan-line" style={{ animationDuration: '4s' }} />
                  </div>

                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a whileHover={{ scale: 1.1 }} href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href={project.github ?? "https://github.com/Sridharn97"} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 tech-glitch-hover inline-block">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono tracking-wider text-muted-foreground border border-border rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
