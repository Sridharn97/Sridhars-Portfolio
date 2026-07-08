import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, FileText, ArrowDown, Code } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub" },

];

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the correct image based on theme. Fallback to dark theme image initially.
  const profileImage = mounted && resolvedTheme === "light" 
    ? "/Profile picture for white theme.png" 
    : "/Profile for black theme.jpg";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03] neural-grid" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm tracking-[0.3em] text-primary uppercase mb-4"
            >
              Hello, It's Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
            >
              <span className="text-gradient tech-glitch-hover inline-block">Sridhar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I am a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> specializing in crafting dynamic and user-centric web applications.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 justify-center lg:justify-start mb-8"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center magnetic-hover hover:border-foreground/30 hover:bg-muted/40 transition-all duration-300 hover:shadow-sm"
                >
                  <social.icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </a>
              ))}
            </motion.div>

            {/* Resume button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="https://drive.google.com/drive/folders/108GQzc5uf22Rfgv5FM_17-0cBQL5P-sJ?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold tracking-wider text-sm uppercase rounded-lg shadow-md hover:bg-foreground/90 hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <FileText size={16} />
              Download Resume
            </motion.a>
          </div>

          {/* Right - Image with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative group">
              {/* Profile Image container */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 relative ai-circuit-corners shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <img key={profileImage} src={profileImage} alt="Sridhar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />

                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay">
                  <div className="ai-scan-line" style={{ animationDuration: '5s' }} />
                </div>
              </div>

              {/* Dynamic Outer rotating ring */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite] -m-4 p-4 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
              </div>
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full border border-dotted border-secondary/20 animate-[spin_60s_linear_infinite_reverse] -m-6 p-6 pointer-events-none" />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -left-6 px-3 py-1.5 rounded-xl border border-primary/20 bg-background/80 backdrop-blur-md text-[11px] font-mono text-foreground font-semibold shadow-md flex items-center gap-1.5 z-20 cursor-default"
              >
                Full Stack
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-6 px-3 py-1.5 rounded-xl border border-secondary/20 bg-background/80 backdrop-blur-md text-[11px] font-mono text-foreground font-semibold shadow-md flex items-center gap-1.5 z-20 cursor-default"
              >
                MERN Developer
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-8 px-3 py-1.5 rounded-xl border border-primary/25 bg-background/80 backdrop-blur-md text-[11px] font-mono text-foreground font-semibold shadow-md flex items-center gap-1.5 z-20 cursor-default"
              >
                React / Next.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 -right-4 px-3 py-1.5 rounded-xl border border-secondary/25 bg-background/80 backdrop-blur-md text-[11px] font-mono text-foreground font-semibold shadow-md flex items-center gap-1.5 z-20 cursor-default"
              >
                AWS Foundations
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Computer Mouse shape */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
