import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap, ShieldCheck, Fingerprint, Scan, Cpu } from "lucide-react";

const internships = [
  {
    type: "professional",
    company: "ISAII AI",
    role: "Full Stack Developer Intern",
    year: "2026",
    img: "/ISAII.jpeg",
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

export const InternshipsSection = () => {
  return (
    <section id="internships" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">EXPERIENCE</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
              <Cpu size={14} /> 04 / EXPERIENCE TIMELINE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              PROFESSIONAL <span className="text-gradient">TRACK RECORD & CLEARANCES</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 3D Timeline Grid with Solid Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {internships.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15} className="flex justify-center">
              
              {/* Outer Perspective Flip Container */}
              <div className="group w-full max-w-sm h-[520px] [perspective:1200px]">
                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT OF BADGE (Solid Dimensional Card Surface) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] solid-card border border-white/10 p-6 flex flex-col items-center justify-between shadow-2xl">
                    
                    {/* Lanyard Hole Clip */}
                    <div className="w-16 h-3 rounded-full bg-slate-950 border border-white/20 mb-4 shadow-inner" />

                    {/* Company Logo / Photo Box */}
                    <div className="relative w-28 h-28 rounded-2xl solid-card-secondary border-2 border-cyan-400/40 p-2 flex items-center justify-center overflow-hidden shadow-xl mb-4">
                      {item.img ? (
                        <img src={item.img} alt={item.company} className="w-full h-full object-cover rounded-xl" />
                      ) : item.type === "professional" ? (
                        <Briefcase size={36} className="text-cyan-400" />
                      ) : (
                        <GraduationCap size={36} className="text-cyan-400" />
                      )}
                    </div>

                    {/* Employee & Clearance Details */}
                    <div className="text-center w-full my-auto">
                      <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 py-1 px-3 rounded border border-cyan-400/40 inline-block mb-3">
                        {item.clearance}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1 font-sans">{item.company}</h3>
                      <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">{item.role}</div>
                    </div>

                    {/* Barcode & ID Number */}
                    <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between">
                      <Fingerprint size={28} className="text-slate-500" />
                      <div className="flex flex-col items-end">
                        <div className="font-mono text-lg text-slate-400 tracking-tighter opacity-80 select-none">
                          ||||||||| | || |||||
                        </div>
                        <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                          {item.idNumber}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* BACK OF BADGE (Solid Decrypted Details) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] solid-card border border-cyan-400/50 p-6 flex flex-col justify-between shadow-2xl">
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <ShieldCheck size={18} />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest">DECRYPTED DATA</span>
                      </div>
                      <span className="text-xs font-mono bg-slate-950 px-2.5 py-1 rounded text-cyan-300 border border-white/10 font-bold">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-1">
                      <h4 className="text-base font-bold text-white mb-2">{item.role}</h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Scan size={12} className="text-cyan-400" /> IDENTIFIED TECH STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono text-cyan-300 bg-slate-950 px-2 py-1 rounded border border-cyan-400/30 font-bold"
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
