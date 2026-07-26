import AnimatedSection from "./AnimatedSection";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { MouseEvent as ReactMouseEvent, useRef } from "react";
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

const HighlightCard = ({ item, i }: { item: typeof highlights[0], i: number }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <AnimatedSection delay={0.2 + i * 0.1} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02 }}
        className="group relative h-full rounded-2xl border border-border/30 bg-card/30 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-500 cursor-crosshair hover:shadow-2xl hover:shadow-primary/5"
      >
        {/* Glow effect that follows mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.15),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Border highlight effect that follows mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.6),
                transparent 80%
              )
            `,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px"
          }}
        />

        <div className="p-6 relative z-20 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-border/50 bg-background/50 shadow-inner overflow-hidden relative group-hover:border-primary/40 transition-colors duration-700">
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-700 relative z-10 group-hover:scale-110" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
          
          {/* Subtle tech accent lines on hover */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const AppleTextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex gap-3 flex-wrap justify-center">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={word === "code" ? "text-gradient" : ""}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

const MacIDEWindow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full rounded-2xl overflow-hidden border border-border/40 bg-[#0d1117]/80 backdrop-blur-3xl shadow-2xl flex flex-col group transition-shadow duration-700 hover:shadow-[0_0_60px_rgba(var(--primary),0.15)] hover:border-border/80 perspective-1000"
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full w-full">
        {/* IDE Header */}
        <div className="bg-[#161b22]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-border/40" style={{ transform: "translateZ(10px)" }}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.5)] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.5)] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.5)] border border-black/10" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/20 px-3 py-1 rounded-md">
            <Terminal className="w-3.5 h-3.5" />
            <span>sridhar.js</span>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* IDE Content */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300 overflow-x-auto flex-1 flex" style={{ transform: "translateZ(30px)" }}>
          <div className="flex gap-6 w-full">
            {/* Line Numbers */}
            <div className="text-gray-600 select-none flex flex-col text-right font-medium">
              {Array.from({length: 13}).map((_, i) => <span key={i}>{i+1}</span>)}
            </div>
            
            {/* Code */}
            <div className="flex flex-col whitespace-pre relative">
              {/* Subtle sweeping highlight over code */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer-sweep_3s_infinite] pointer-events-none" />
              
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
      </div>
    </motion.div>
  );
};

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
            <AppleTextReveal text="Behind the code" />
          </div>
        </AnimatedSection>

        {/* ── Top Split: IDE Bio & Highlights ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24" style={{ perspective: "1000px" }}>
          
          {/* Left: IDE Window */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 h-full w-full">
            <MacIDEWindow />
          </AnimatedSection>

          {/* Right: Highlights 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} i={i} />
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-80 pointer-events-none group-hover:scale-110 transition-transform duration-[1.5s] transform-gpu" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-700 transform-gpu will-change-transform" />
              
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
