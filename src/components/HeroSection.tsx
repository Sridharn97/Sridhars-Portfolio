import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, Terminal, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn", color: "#0077b5" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter", color: "#1DA1F2" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub", color: "#888888" },
];

const SpotlightButton = () => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a
      ref={divRef}
      href="https://drive.google.com/drive/folders/108GQzc5uf22Rfgv5FM_17-0cBQL5P-sJ?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1); }}
      onBlur={() => { setIsFocused(false); setOpacity(0); }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_-10px_rgba(var(--primary),0.6)] hover:shadow-[0_0_50px_-15px_rgba(var(--primary),0.8)] border border-primary/50 w-full sm:w-auto"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
      <Terminal size={18} className="relative z-10 group-hover:animate-bounce" />
      <span className="relative z-10 tracking-wider">DOWNLOAD RESUME</span>
    </a>
  );
};

const SocialDock = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div 
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-center gap-2 p-2 rounded-2xl glass border border-border/50 shadow-xl bg-card/60 backdrop-blur-xl h-[64px]"
    >
      {socials.map((social) => (
        <DockIcon key={social.label} mouseX={mouseX} social={social} />
      ))}
    </motion.div>
  );
};

const DockIcon = ({ mouseX, social }: { mouseX: MotionValue<number>, social: any }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [48, 80, 48]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      style={{ width, height: width }}
      href={social.href}
      aria-label={social.label}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex items-center justify-center rounded-xl hover:bg-muted/80 transition-colors z-10 overflow-visible"
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 z-0"
        style={{ backgroundColor: social.color }}
      />
      
      {/* Tooltip */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-50 flex flex-col items-center">
        <span className="bg-popover text-popover-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap border border-border/50">
          {social.label}
        </span>
        <div className="w-2 h-2 bg-popover border-b border-r border-border/50 transform rotate-45 -mt-1.5" />
      </div>

      <motion.div style={{ scale: useTransform(width, [48, 80], [1, 1.4]) }}>
        <social.icon 
          size={22} 
          className="text-muted-foreground group-hover:text-foreground transition-colors relative z-10"
        />
      </motion.div>
    </motion.a>
  );
};

const ProfileImage = ({ profileImage }: { profileImage: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="flex-1 flex justify-center items-center relative w-full mt-12 lg:mt-0 perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-primary/5 shadow-2xl hover:shadow-[0_0_60px_rgba(var(--primary),0.3)] transition-shadow duration-700 group z-10 cursor-crosshair"
      >
        {/* Orbital Ring with Text */}
        <div className="absolute inset-[-40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: "translateZ(-10px)" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
            <path id="circlePath" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
            <text className="text-[7.5px] font-mono font-bold fill-primary uppercase tracking-[0.25em]">
              <textPath href="#circlePath" startOffset="0%">
                • SRIDHAR N • FULL STACK DEVELOPER • SRIDHAR N • FULL STACK DEVELOPER 
              </textPath>
            </text>
          </svg>
        </div>

        {/* Orbiting particles */}
        <div className="absolute inset-[-20px] rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_10s_linear_infinite] pointer-events-none" style={{ transform: "translateZ(10px)" }}>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),1)] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute inset-[-20px] rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" style={{ transform: "translateZ(10px)" }}>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Animated Glow Behind Image */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-slow pointer-events-none" style={{ transform: "translateZ(-20px)" }} />
        
        {/* The Image Itself */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 bg-background flex items-center justify-center shadow-inner" style={{ transform: "translateZ(30px)" }}>
          <img 
            src={profileImage} 
            alt="Sridhar N" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="ai-scan-overlay" />
        </div>
        
        {/* Inner Ring Glow */}
        <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none z-30 opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(40px)" }} />
      </motion.div>
    </motion.div>
  );
};

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
      style={{ opacity, scale, y }}
    >
      
      {/* Dynamic Background Mesh (Optimized for performance) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30 contain-strict">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-[100px] rounded-full animate-pulse-slow transform-gpu will-change-[opacity]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full animate-pulse-slow transform-gpu will-change-[opacity]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full transform-gpu" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 min-h-[calc(100vh-8rem)] pt-12">
        
        {/* LEFT HALF: Text & Buttons */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 shadow-lg backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-muted-foreground">Available for Opportunities</span>
          </motion.div>

          {/* Massive Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-full"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-glow leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/30">
                SRIDHAR N
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center lg:items-start gap-6 relative z-10 mt-2"
          >
            <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
              <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary/80 rounded-full lg:hidden" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-primary font-bold tracking-[0.2em] uppercase">
                Full Stack Developer
              </h2>
              <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary/80 rounded-full lg:bg-gradient-to-r" />
            </div>
            
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Crafting immersive digital experiences with modern web technologies. 
              Bridging the gap between beautiful design and robust engineering.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-10 relative z-50 w-full"
          >
            {/* Glowing Spotlight Resume Button */}
            <SpotlightButton />

            {/* Mac OS Style Social Dock */}
            <SocialDock />
          </motion.div>
        </motion.div>

        {/* RIGHT HALF: Big Profile Image */}
        <ProfileImage profileImage={profileImage} />

      </div>
    </motion.section>
  );
};

export default HeroSection;
