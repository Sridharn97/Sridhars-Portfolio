import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Lightbulb,
  Rocket,
  GraduationCap,
  Terminal,
  CheckCircle2
} from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable & scalable architecture" },
  { icon: Layers, title: "Full Stack", desc: "Front-end to back-end expertise" },
  { icon: Lightbulb, title: "Problem Solver", desc: "150+ LeetCode problems solved" },
  { icon: Rocket, title: "Fast Learner", desc: "Always exploring new technologies" },
];

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E — Computer Science & Engineering",
    score: "CGPA: 7.82",
    year: "2023 – 2027",
    status: "Ongoing",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "HSC — Higher Secondary",
    score: "89.67%",
    year: "2021 – 2023",
    status: "Completed",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "SSLC — Secondary School",
    score: "Pass",
    year: "2020 – 2021",
    status: "Completed",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-24 overflow-hidden">
      <div className="section-divider mb-16" />
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Header ── */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm">
              — Who I Am
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Behind the <span className="text-gradient">code</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* ── Top Split: IDE Bio & Highlights ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Left: IDE Window */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 h-full">
            <motion.div 
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl overflow-hidden border border-border/40 bg-[#0d1117]/90 backdrop-blur-xl shadow-2xl flex flex-col group transition-all duration-500 hover:shadow-primary/10 hover:border-border/80"
            >
              {/* IDE Header */}
              <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-border/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/10 px-3 py-1 rounded-md">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>sridhar.js</span>
                </div>
                <div className="w-10" /> {/* Spacer for centering */}
              </div>

              {/* IDE Content */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300 overflow-x-auto flex-1 flex">
                <div className="flex gap-6 w-full">
                  {/* Line Numbers */}
                  <div className="text-gray-600 select-none flex flex-col text-right font-medium">
                    {Array.from({length: 13}).map((_, i) => <span key={i}>{i+1}</span>)}
                  </div>
                  
                  {/* Code */}
                  <div className="flex flex-col whitespace-pre">
                    <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">name</span>: <span className="text-[#a5d6ff]">'Sridhar'</span>,</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">role</span>: <span className="text-[#a5d6ff]">'Full Stack Developer'</span>,</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">passion</span>: <span className="text-[#a5d6ff]">'Building seamless applications'</span>,</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">location</span>: <span className="text-[#a5d6ff]">'Tamil Nadu, India'</span>,</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">status</span>: <span className="text-[#a5d6ff]">'Available for Internship'</span>,</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">techStack</span>: [</p>
                    <p className="ml-8"><span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'Next.js'</span>, <span className="text-[#a5d6ff]">'Node.js'</span>, <span className="text-[#a5d6ff]">'MongoDB'</span></p>
                    <p className="ml-4">],</p>
                    <p className="ml-4"><span className="text-[#d2a8ff]">solveProblem</span>: <span className="text-[#ff7b72]">()</span> <span className="text-[#ff7b72]">=&gt;</span> {'{'}</p>
                    <p className="ml-8"><span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">'Turning ideas into digital reality'</span>;</p>
                    <p className="ml-4">{'}'}</p>
                    <p>{'};'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right: Highlights 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.2 + i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-full rounded-2xl p-6 border border-border/30 bg-card/30 backdrop-blur-sm glass-card-hover group overflow-hidden flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-border/50 bg-background/50 shadow-inner group-hover:bg-primary/10 transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ── Bottom: Education Rows ── */}
        <AnimatedSection delay={0.5} className="mt-24">
          <div className="flex flex-col items-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm">
              — Education
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Academic <span className="text-gradient">Background</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Widget 1: College (Hero) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 rounded-[32px] p-8 md:p-12 relative overflow-hidden bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl group hover:border-primary/40 transition-all duration-500"
            >
              {/* Giant subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-80 pointer-events-none group-hover:scale-110 transition-transform duration-[1.5s]" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-16">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border/60 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--primary),0.15)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-shadow duration-500">
                    <GraduationCap size={32} />
                  </div>
                  <span className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                    {education[0].status}
                  </span>
                </div>
                
                <div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest block mb-4 flex items-center gap-3">
                    {education[0].year}
                    <div className="h-px bg-border/60 flex-1" />
                  </span>
                  <h4 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4 leading-tight">
                    {education[0].institution}
                  </h4>
                  <p className="text-lg md:text-xl font-medium text-muted-foreground mb-10">
                    {education[0].degree}
                  </p>
                  
                  <div className="inline-flex items-center rounded-2xl bg-background/80 border border-border/60 backdrop-blur-md shadow-inner overflow-hidden group/score cursor-default">
                    <div className="px-6 py-4 bg-muted/30 border-r border-border/50">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Score</span>
                    </div>
                    <div className="px-6 py-4">
                      <span className="text-2xl font-black text-primary font-mono tracking-tight group-hover/score:text-foreground transition-colors">{education[0].score.split(': ')[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: HSC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-muted/20 border border-border/40 hover:bg-muted/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest bg-background/50 px-3 py-1.5 rounded-full border border-border/50">
                    {education[1].year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground shadow-sm">
                    <CheckCircle2 size={14} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 leading-snug">{education[1].institution}</h4>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{education[1].degree}</p>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Score</span>
                    <span className="text-lg font-bold font-mono text-foreground bg-background px-3 py-1 rounded-lg border border-border/40">{education[1].score}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget 3: SSLC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-muted/20 border border-border/40 hover:bg-muted/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest bg-background/50 px-3 py-1.5 rounded-full border border-border/50">
                    {education[2].year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground shadow-sm">
                    <CheckCircle2 size={14} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 leading-snug">{education[2].institution}</h4>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{education[2].degree}</p>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Score</span>
                    <span className="text-lg font-bold font-mono text-foreground bg-background px-3 py-1 rounded-lg border border-border/40">{education[2].score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default AboutSection;
