import AnimatedSection from "./AnimatedSection";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent as ReactMouseEvent, useRef } from "react";
import {
  Code2,
  Layers,
  Lightbulb,
  Rocket,
  GraduationCap,
  Terminal,
  CheckCircle2,
  Cpu
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

const SolidHighlightCard = ({ item, i }: { item: typeof highlights[0]; i: number }) => {
  return (
    <AnimatedSection delay={0.1 + i * 0.1} className="h-full">
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="solid-card p-6 h-full flex flex-col justify-between cursor-crosshair border border-white/10 group"
      >
        <div>
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md">
            <item.icon size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">{item.desc}</p>
        </div>
        <div className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest mt-4">
          SYS.CARD_0{i + 1}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const Solid3DMacIDE = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="solid-card border-2 border-white/10 p-0 shadow-2xl relative overflow-hidden h-full flex flex-col group"
      >
        {/* IDE Header */}
        <div className="bg-slate-950 px-5 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900 border border-cyan-400/30 px-3 py-1 rounded">
            <Terminal size={14} />
            <span>sridhar_profile.config.ts</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">SYS.IDE</span>
        </div>

        {/* IDE Code Editor Body */}
        <div className="p-6 font-mono text-sm text-slate-300 bg-[#07090e] flex-1 overflow-x-auto">
          <div className="flex gap-6">
            <div className="text-slate-600 select-none flex flex-col text-right font-semibold">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            <div className="whitespace-pre">
              <p><span className="text-purple-400 font-bold">export const</span> <span className="text-cyan-300 font-bold">developerProfile</span> = {'{'}</p>
              <p className="ml-4"><span className="text-cyan-400">fullName</span>: <span className="text-emerald-300">'Sridhar N'</span>,</p>
              <p className="ml-4"><span className="text-cyan-400">role</span>: <span className="text-emerald-300">'Full Stack Developer'</span>,</p>
              <p className="ml-4"><span className="text-cyan-400">education</span>: <span className="text-emerald-300">'Sri Eshwar College of Engineering'</span>,</p>
              <p className="ml-4"><span className="text-cyan-400">location</span>: <span className="text-emerald-300">'Tamil Nadu, India'</span>,</p>
              <p className="ml-4"><span className="text-cyan-400">coreTech</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Next.js'</span>, <span className="text-amber-300">'Node.js'</span>, <span className="text-amber-300">'MongoDB'</span>],</p>
              <p className="ml-4"><span className="text-cyan-400">motto</span>: <span className="text-emerald-300">'Architecting solid dimensional web systems'</span>,</p>
              <p className="ml-4"><span className="text-purple-400">buildSystem</span>: <span className="text-blue-400">async ()</span> =&gt; {'{'}</p>
              <p className="ml-8"><span className="text-purple-400">return</span> <span className="text-emerald-300">'Bridging full-stack engineering & creative UI'</span>;</p>
              <p className="ml-4">{'}'}</p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Low Contrast 3D Giant Background Typography */}
      <div className="bg-giant-text">ABOUT</div>

      <div className="section-divider-dimensional mb-20" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Marker Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
              <Cpu size={14} /> 01 / ABOUT SYSTEM
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              BEHIND THE <span className="text-gradient">CODE & ARCHITECTURE</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* IDE & Highlights 3D Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          <AnimatedSection delay={0.1} className="lg:col-span-7 h-full">
            <Solid3DMacIDE />
          </AnimatedSection>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <SolidHighlightCard key={item.title} item={item} i={i} />
            ))}
          </div>
        </div>

        {/* Academic Background Section */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="flex flex-col items-center mb-14 text-center">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg">
              ACADEMIC REPOSITORY
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              EDUCATION & <span className="text-gradient">QUALIFICATIONS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* College Hero Widget */}
            <div className="md:col-span-2 solid-card p-8 sm:p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-lg">
                  <GraduationCap size={30} />
                </div>
                <span className="px-4 py-1.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-widest">
                  {education[0].status}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  {education[0].year}
                </span>
                <h4 className="text-2xl sm:text-4xl font-black text-white mb-2 leading-snug">
                  {education[0].institution}
                </h4>
                <p className="text-slate-300 text-base font-medium mb-6">
                  {education[0].degree}
                </p>

                <div className="inline-flex items-center rounded-lg solid-card-secondary p-3 border border-cyan-400/40">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-3">SCORE:</span>
                  <span className="text-xl font-bold font-mono text-cyan-300">{education[0].score.split(': ')[1]}</span>
                </div>
              </div>
            </div>

            {/* HSC & SSLC Cards */}
            <div className="flex flex-col gap-6">
              {education.slice(1).map((item) => (
                <div key={item.degree} className="solid-card p-6 border border-white/10 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-cyan-400 tracking-widest bg-slate-900 px-2.5 py-1 rounded border border-white/10">
                      {item.year}
                    </span>
                    <CheckCircle2 size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.institution}</h4>
                    <p className="text-xs text-slate-400 mb-3">{item.degree}</p>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-950 px-2.5 py-1 rounded border border-cyan-400/30">
                      Score: {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default AboutSection;
