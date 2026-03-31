import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, FileText, ArrowDown, Code } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub" },

];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03] neural-grid" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(0 0% 100%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
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
              className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0 mb-8"
            >
              I am a passionate Full Stack Developer specializing in crafting dynamic and user-centric web applications.
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
                  className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center magnetic-hover hover:border-foreground hover:bg-foreground transition-all duration-300"
                >
                  <social.icon size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
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
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground font-medium tracking-wider text-sm uppercase magnetic-hover hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            >
              <FileText size={16} />
              Download Resume
            </motion.a>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-border relative ai-circuit-corners">
                <img src={heroImage} alt="Sridhar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                {/* AI Scan Overlay */}
                <div className="ai-scan-overlay">
                  <div className="ai-scan-line" style={{ animationDuration: '5s' }} />
                </div>
              </div>
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full border border-muted-foreground/20 animate-[spin_20s_linear_infinite] -m-4 p-4">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-foreground rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
