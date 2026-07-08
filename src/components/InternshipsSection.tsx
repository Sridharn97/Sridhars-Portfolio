import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap, ShieldCheck, Fingerprint, Scan } from "lucide-react";

const internships = [
  {
    type: "professional",
    company: "ISAII AI",
    role: "Full Stack Developer Intern",
    year: "2026",
    img: "/ISAII.jpeg", // Assuming this exists or falls back cleanly
    skills: ["Next.js", "React.js", "Supabase", "Postman", "Agile"],
    description:
      "Developed and optimized scalable frontend components using Next.js and React.js. Integrated backend services with Supabase, conducted API testing via Postman, and participated in active code reviews and agile sprints to deliver high-quality project builds under deadlines.",
    clearance: "LEVEL 5 - PROFESSIONAL",
    idNumber: "ID-2026-AI-7734",
  },
  {
    type: "training",
    company: "Algotutor",
    role: "Modern Full Stack Training",
    year: "2025",
    skills: ["Next.js", "React.js", "JavaScript", "MongoDB", "REST APIs"],
    description:
      "Built full-stack web applications utilizing Next.js Server-Side Rendering (SSR), API routes, and RESTful endpoints. Implemented scalable storage structures and state management using React and MongoDB.",
    clearance: "LEVEL 3 - TRAINING",
    idNumber: "TR-2025-AT-0921",
  },
  {
    type: "training",
    company: "Better Tomorrow",
    role: "MERN Stack Training",
    year: "2025",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Acquired hands-on experience building MERN stack projects. Created RESTful APIs using Express/Node.js and managed database interactions via MongoDB.",
    clearance: "LEVEL 3 - TRAINING",
    idNumber: "TR-2025-BT-4412",
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-24 relative scroll-mt-24 bg-background">
      <div className="section-divider mb-16" />
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-20">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm">
              — Clearances
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Access <span className="text-gradient">granted</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Hover over my corporate ID badges to scan clearance details and review my professional track record.
            </p>
          </div>
        </AnimatedSection>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 perspective-1000">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15} className="flex justify-center">
              
              {/* Outer Card Container (Perspective) */}
              <div 
                className="group w-full max-w-sm h-[520px] [perspective:1000px]"
              >
                {/* Inner Flip Container */}
                <div 
                  className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  
                  {/* =======================
                      FRONT OF BADGE (ID)
                      ======================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] border border-border/50 rounded-3xl bg-card/40 backdrop-blur-md shadow-xl overflow-hidden flex flex-col items-center p-6">
                    {/* Holographic Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 opacity-50 pointer-events-none" />
                    
                    {/* Lanyard Hole */}
                    <div className="w-16 h-3 rounded-full bg-background border border-border/50 mb-8 shadow-inner" />

                    {/* Company Logo / Photo Area */}
                    <div className="relative w-28 h-28 rounded-2xl border-2 border-border/60 bg-muted/30 p-2 mb-6 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                      {item.img ? (
                        <img src={item.img} alt={item.company} className="w-full h-full object-cover rounded-xl" />
                      ) : item.type === "professional" ? (
                        <Briefcase className="w-10 h-10 text-muted-foreground" />
                      ) : (
                        <GraduationCap className="w-10 h-10 text-muted-foreground" />
                      )}
                      {/* Scanline animation on logo */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-[200%] ai-scan-line" />
                    </div>

                    {/* Employee Info */}
                    <div className="text-center w-full mb-auto">
                      <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 font-bold bg-primary/10 py-1 px-3 rounded-full inline-block border border-primary/20">
                        {item.clearance}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1 font-sans">{item.company}</h3>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{item.role}</div>
                    </div>

                    {/* Badge Footer (Barcode & Fingerprint) */}
                    <div className="w-full border-t border-border/40 pt-4 flex items-center justify-between mt-6">
                      <Fingerprint className="w-8 h-8 text-muted-foreground/40" />
                      <div className="flex flex-col items-end">
                        {/* Faux Barcode */}
                        <div className="font-mono text-xl text-muted-foreground/60 tracking-[-0.1em] opacity-70">
                          ||||||||| | || |||||
                        </div>
                        <div className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest mt-1">
                          {item.idNumber}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =======================
                      BACK OF BADGE (DETAILS)
                      ======================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] border border-primary/40 rounded-3xl bg-card shadow-[0_0_30px_rgba(var(--primary),0.15)] overflow-hidden flex flex-col p-6">
                    {/* Glowing Tech Background */}
                    <div className="absolute inset-0 opacity-[0.03] neural-grid pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">Decrypted Data</span>
                      </div>
                      <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-foreground border border-border/50">
                        {item.year}
                      </span>
                    </div>

                    {/* Description Text */}
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <h4 className="text-lg font-bold text-foreground mb-3">{item.role}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Skills Database */}
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Scan className="w-3 h-3" /> Tech Stack Identified
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-mono text-foreground bg-muted px-2.5 py-1.5 rounded-lg border border-border/50 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
