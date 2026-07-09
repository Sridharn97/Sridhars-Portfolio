import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github, FileText, Code, ArrowRight, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn", color: "#0077b5" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter", color: "#1DA1F2" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub", color: "#888888" },
];

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const profileImage = mounted && resolvedTheme === "light" 
    ? "/Profile picture for white theme.png" 
    : "/Profile for black theme.jpg";

  // Stagger Animations for IDE Text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.5 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* LEFT: IDE / Terminal Window & Buttons */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-left w-full max-w-2xl">
            
            {/* The Code Editor Window */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full rounded-xl overflow-hidden glass-card border border-border/50 shadow-2xl relative mb-8 backdrop-blur-xl"
            >
              {/* Mac Window Header */}
              <div className="bg-muted/40 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                 <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
                 </div>
                 <div className="flex-1 flex justify-center">
                     <p className="font-mono text-[10px] sm:text-xs text-muted-foreground flex items-center gap-2"><Code size={14}/> sridhar-portfolio.tsx</p>
                 </div>
              </div>
              
              {/* Code Content */}
              <div className="p-5 sm:p-8 font-mono text-[13px] sm:text-sm md:text-base leading-relaxed overflow-x-auto text-foreground/90">
                 <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 whitespace-nowrap">
                    
                    <motion.div variants={itemVariants}>
                        <span className="text-purple-400">import</span> {`{ Developer }`} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@sridhar/core"</span>;
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-4">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> <span className="text-purple-400">=</span> <span className="text-yellow-300">"Sridhar N"</span>;
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">role</span> <span className="text-purple-400">=</span> <span className="text-emerald-400">"Full Stack Developer"</span>;
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-4 whitespace-normal">
                        <span className="text-muted-foreground italic">{"// Passionate about crafting dynamic, interactive, and user-centric web experiences."}</span>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-2 flex items-center">
                        <span className="text-blue-400">developer</span>.<span className="text-yellow-200">execute</span>(); <span className="ml-1 animate-pulse font-bold text-foreground">_</span>
                    </motion.div>
                 </motion.div>
              </div>
            </motion.div>

            {/* Bottom Actions Row */}
            <motion.div 
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center gap-6 w-full"
            >
              {/* Resume Button */}
              <a
                href="https://drive.google.com/drive/folders/108GQzc5uf22Rfgv5FM_17-0cBQL5P-sJ?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full sm:w-auto gap-3 bg-foreground/5 border border-border/50 px-8 py-3.5 rounded-lg text-foreground font-mono text-sm hover:bg-foreground/10 hover:border-foreground/30 hover:shadow-lg transition-all z-10 overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-500 ease-out z-0" />
                <Terminal size={16} className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="relative z-10 font-semibold tracking-wide">./download_resume.sh</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-11 h-11 flex items-center justify-center rounded-xl glass border border-border/50 hover:-translate-y-1 transition-all duration-300 z-10"
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 z-0"
                      style={{ backgroundColor: social.color }}
                    />
                    <social.icon 
                      size={18} 
                      className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
            
          </div>

          {/* RIGHT: Floating Profile & Tech Components */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              
              {/* Floating Tech Component 1: React */}
              <motion.div 
                  animate={{ y: [-15, 10, -15], rotate: [-2, 5, -2] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 md:-top-10 md:-left-10 px-4 py-2 glass backdrop-blur-xl rounded-full border border-border/50 text-xs md:text-sm font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,255,0.1)] z-20 pointer-events-none"
              >
                <span className="text-cyan-400">{"<"}</span>React <span className="text-cyan-400">{"/>"}</span>
              </motion.div>

              {/* Floating Tech Component 2: TS */}
              <motion.div 
                  animate={{ y: [15, -10, 15], rotate: [5, -2, 5] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 px-4 py-2 glass backdrop-blur-xl rounded-full border border-border/50 text-xs md:text-sm font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.1)] z-20 pointer-events-none"
              >
                <span className="text-blue-500">.ts</span> {`{ ... }`}
              </motion.div>

              {/* Floating Tech Component 3: Node.js */}
              <motion.div 
                  animate={{ y: [-10, 15, -10], rotate: [-5, 2, -5] }} 
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2 px-4 py-2 glass backdrop-blur-xl rounded-full border border-border/50 text-xs md:text-sm font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.1)] z-20 pointer-events-none"
              >
                <span className="text-green-500">{`{ Node }`}</span>
              </motion.div>

              {/* Main Profile Image Container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-border/50 bg-background shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
                  
                  {/* Subtle Code Brackets overlay just for flavor */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                      <span className="font-mono text-6xl text-primary font-thin">{"<"}</span>
                      <span className="font-mono text-6xl text-primary font-thin">{">"}</span>
                  </div>

                  <img 
                    key={profileImage} 
                    src={profileImage} 
                    alt="Sridhar" 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700" 
                  />
                  
                  {/* Inner ring glow */}
                  <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
