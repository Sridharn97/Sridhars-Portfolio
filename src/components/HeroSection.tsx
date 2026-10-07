import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, Terminal, ChevronDown, Cpu, ShieldCheck, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { HeroCoreScene } from "./3D/HeroCoreScene";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn", color: "#0077b5" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter", color: "#1DA1F2" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub", color: "#888888" },
];

const Physical3DButton = () => {
  return (
    <a
      href="https://drive.google.com/drive/folders/108GQzc5uf22Rfgv5FM_17-0cBQL5P-sJ?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-3d-primary flex items-center justify-center gap-3 px-8 py-4 font-mono font-bold tracking-widest text-sm uppercase w-full sm:w-auto"
    >
      <Terminal size={18} className="animate-bounce" />
      <span>DOWNLOAD RESUME</span>
    </a>
  );
};

const SocialDock3D = () => {
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl solid-card-secondary border border-white/10 shadow-2xl">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition-all shadow-md group relative"
        >
          <social.icon size={20} />
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 text-cyan-300 text-[10px] font-mono font-bold px-2 py-1 rounded border border-cyan-400/40 pointer-events-none whitespace-nowrap shadow-xl">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

/* -------------------------------------------------------------
   3D INNOVATIVE PROFILE PHOTO DISPLAY
   ------------------------------------------------------------- */
const Profile3DFrame = ({ profileImage }: { profileImage: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Interactive Mouse Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div style={{ perspective: "1200px" }} className="w-full flex items-center justify-center">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] cursor-crosshair group flex items-center justify-center"
      >
        {/* Layer 1: Ambient Cyan & Purple Glowing Backdrop (-30px) */}
        <div
          className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ transform: "translateZ(-30px)" }}
        />

        {/* Layer 2: Outer Rotating Cybernetic SVG Text Orbit (-10px) */}
        <div
          className="absolute inset-[-45px] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          style={{ transform: "translateZ(-10px)" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_24s_linear_infinite]">
            <path id="heroProfileCircle" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
            <text className="text-[6.5px] font-mono font-bold fill-cyan-300 uppercase tracking-[0.28em] drop-shadow-[0_0_8px_#00f0ff]">
              <textPath href="#heroProfileCircle" startOffset="0%">
                • SRIDHAR N • FULL STACK DEVELOPER • DIGITAL CORE • INNOVATION •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Layer 3: Orbiting 3D Tech Satellite Nodes (10px) */}
        <div
          className="absolute inset-[-25px] rounded-full border border-cyan-400/30 opacity-70 group-hover:opacity-100 transition-opacity animate-[spin_12s_linear_infinite] pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f0ff] -translate-x-1/2 -translate-y-1/2 border border-white" />
        </div>
        <div
          className="absolute inset-[-25px] rounded-full border border-purple-500/30 opacity-70 group-hover:opacity-100 transition-opacity animate-[spin_18s_linear_infinite_reverse] pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7] -translate-x-1/2 translate-y-1/2 border border-white" />
        </div>

        {/* Layer 4: Solid 3D Metallic Frame Container (0px) */}
        <div
          className="w-full h-full rounded-[36px] solid-card border-2 border-cyan-400/50 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.25)] relative overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Internal Corner Tech Notches */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

          {/* Layer 5: High Resolution Photo Display (+25px Z-Depth) */}
          <div
            className="w-full h-full rounded-[28px] overflow-hidden border border-white/20 bg-slate-950 relative shadow-inner flex items-center justify-center"
            style={{ transform: "translateZ(25px)" }}
          >
            <img
              src={profileImage}
              alt="Sridhar N"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[1.05] contrast-[1.05]"
            />

            {/* Cinematic Overlay Shader & Holographic Laser Line */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay pointer-events-none" />

            {/* Animated Laser Scanline */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_15px_#00f0ff] opacity-0 group-hover:opacity-100 animate-[scan-vertical_3s_linear_infinite] pointer-events-none" />
          </div>

          {/* Layer 6: Floating Interactive 3D HUD Badges (+45px Z-Depth) */}
          <div
            className="absolute top-6 right-6 bg-slate-950/90 border border-cyan-400/50 px-3 py-1 rounded-md font-mono text-[9px] text-cyan-300 font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md flex items-center gap-1.5"
            style={{ transform: "translateZ(45px)" }}
          >
            <Zap size={11} className="text-cyan-400 animate-pulse" />
            <span>ONLINE // SYS.01</span>
          </div>

          <div
            className="absolute bottom-6 left-6 bg-slate-950/90 border border-purple-400/50 px-3 py-1 rounded-md font-mono text-[9px] text-purple-300 font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md flex items-center gap-1.5"
            style={{ transform: "translateZ(45px)" }}
          >
            <ShieldCheck size={11} className="text-purple-400" />
            <span>CORE NODE</span>
          </div>

          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950 border-2 border-cyan-400 px-5 py-1.5 rounded-lg font-mono text-[10px] text-cyan-300 font-bold uppercase tracking-widest shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(0,240,255,0.4)] whitespace-nowrap z-30"
            style={{ transform: "translateZ(55px)" }}
          >
            01 // CORE_DEVELOPER_NODE
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const profileImage = mounted && resolvedTheme === "light"
    ? "/Profile picture for white theme.png"
    : "/Profile for black theme.jpg";

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 z-10"
      style={{ opacity, y }}
    >
      {/* Signature System Coordinates Background Marker */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-cyan-400/40 tracking-[0.3em] uppercase pointer-events-none hidden md:block">
        SYS.01 // BUILD_MODE // FULL_STACK_DEV // 2026
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* LEFT COLUMN: Dominant 3D Typography & Action Controls */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          {/* Availability Status Tag (Solid Dimensional) */}
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg solid-card-secondary border border-cyan-400/30 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span>STATUS: AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Massive Dominant Heading with Subtle 3D Text Depth */}
          <div className="relative mb-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-3d-title uppercase leading-none">
              SRIDHAR<span className="text-cyan-400">.N</span>
            </h1>
          </div>

          {/* Subtitle / Technical Role Badge */}
          <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded bg-slate-950 border border-white/10 text-cyan-400 font-mono font-bold text-sm tracking-[0.25em] uppercase">
              <Cpu size={16} /> FULL STACK DEVELOPER
            </div>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-sans font-medium">
              Architecting high-performance digital environments with modern full-stack web technologies.
              Bridging complex algorithm design with robust engineering.
            </p>
          </div>

          {/* Physical 3D Action Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full">
            <Physical3DButton />
            <SocialDock3D />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive 3D Developer Core Workstation Scene & Prominent 3D Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]"
        >
          {/* Interactive Three.js 3D Core Canvas in background of photo */}
          <div className="w-full h-full absolute inset-0 z-0 scale-110">
            <HeroCoreScene />
          </div>

          {/* Prominent Innovative 3D Interactive Profile Photo Frame */}
          <Profile3DFrame profileImage={profileImage} />

        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-mono text-xs tracking-widest uppercase"
      >
        <span>INITIALIZE_SCROLL</span>
        <ChevronDown size={18} className="animate-bounce text-cyan-400" />
      </a>
    </motion.section>
  );
};

export default HeroSection;
