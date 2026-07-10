import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, Terminal, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn", color: "#0077b5" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter", color: "#1DA1F2" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub", color: "#888888" },
];

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
            {/* Glowing Resume Button */}
            <a
              href="https://drive.google.com/drive/folders/108GQzc5uf22Rfgv5FM_17-0cBQL5P-sJ?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_-10px_rgba(var(--primary),0.6)] hover:shadow-[0_0_50px_-15px_rgba(var(--primary),0.8)] border border-primary/50 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
              <Terminal size={18} className="relative z-10" />
              <span className="relative z-10 tracking-wider">DOWNLOAD RESUME</span>
            </a>

            {/* Social Icons Dock */}
            <div className="flex items-center gap-2 p-2 rounded-2xl glass border border-border/50 shadow-xl bg-card/60 backdrop-blur-xl">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-12 h-12 flex items-center justify-center rounded-xl hover:bg-muted/80 transition-all duration-300 z-10"
                >
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 z-0"
                    style={{ backgroundColor: social.color }}
                  />
                  <social.icon 
                    size={22} 
                    className="text-muted-foreground group-hover:text-foreground transition-all duration-300 relative z-10 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT HALF: Big Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 flex justify-center items-center relative w-full mt-12 lg:mt-0"
        >
          {/* Big Profile Avatar */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-primary/20 shadow-xl hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-shadow duration-700 group z-10">
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow" />
            
            {/* The Image Itself */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 bg-background flex items-center justify-center">
              <img 
                key={profileImage}
                src={profileImage} 
                alt="Sridhar N" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Inner Ring Glow */}
            <div className="absolute inset-2 rounded-full border border-white/10 pointer-events-none z-30" />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection;
