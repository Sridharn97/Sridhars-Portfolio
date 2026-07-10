import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShrunk(latest > 60);
  });

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Premium IDE Toolbar container */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        className={`mx-auto transition-all duration-500 ease-custom-spring pointer-events-auto ${
          shrunk
            ? "mt-6 max-w-fit rounded-xl border border-border/50 bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-3 py-2"
            : "mt-0 max-w-full rounded-none bg-background/20 backdrop-blur-xl border-b border-border/30 px-0 py-5"
        }`}
      >
        <div className={`flex items-center justify-center transition-all duration-500 ${
          shrunk ? "px-2 gap-4" : "container mx-auto px-8 justify-between"
        }`}>
          {/* Logo (Code Tag) */}
          <a href="#home" className="group flex items-center gap-2 shrink-0">
            <div className={`font-mono font-bold text-primary transition-all duration-300 flex items-center ${
              shrunk ? "text-base" : "text-xl"
            }`}>
              <span className="text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 mr-1">{"<"}</span>
              SN
              <span className="text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 ml-1">{"/>"}</span>
            </div>
          </a>

          {/* Desktop Nav (IDE Tabs) */}
          <ul className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              
              let ext = ".js";
              if (item.label === "Home" || item.label === "Projects") ext = ".jsx";
              if (item.label === "Skills") ext = ".json";
              if (item.label === "Contact") ext = ".env";

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative flex items-center transition-colors duration-300 rounded-lg ${
                      shrunk ? "px-3 py-1.5 text-[12px]" : "px-4 py-2 text-sm"
                    } font-mono lowercase overflow-hidden ${
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20 shadow-[inset_0_1px_4px_rgba(0,0,0,0.2)]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-primary rounded-t-full shadow-[0_0_10px_currentColor]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center">
                      {item.label.toLowerCase()}
                      <span className={isActive ? "text-primary/70" : "text-muted-foreground/50"}>{ext}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />
            
            {/* "Hire Me" Button (Terminal Style) */}
            {!shrunk && (
              <a
                href="#contact"
                className="group relative hidden xl:inline-flex items-center gap-2 bg-foreground text-background border border-border/50 px-6 py-2.5 rounded-lg text-sm font-medium font-mono hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all overflow-hidden z-10"
              >
                <div className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-500 ease-out z-0" />
                <span className="relative z-10">Hire_Me()</span>
                <ArrowUpRight size={16} className="relative z-10" />
              </a>
            )}
            {shrunk && (
              <a
                href="#contact"
                className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Hire Me"
              >
                <Terminal size={16} />
              </a>
            )}

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden rounded-lg border border-border flex items-center justify-center text-foreground hover:border-foreground hover:bg-muted transition-all duration-300 ${
                shrunk ? "w-9 h-9" : "w-11 h-11"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X size={shrunk ? 16 : 20} /> : <Menu size={shrunk ? 16 : 20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-3xl z-[-1] pointer-events-auto"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                let ext = ".js";
                if (item.label === "Home" || item.label === "Projects") ext = ".jsx";
                if (item.label === "Skills") ext = ".json";
                if (item.label === "Contact") ext = ".env";

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="w-full max-w-sm"
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-center text-2xl font-mono py-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? "text-primary bg-primary/10 border-primary/30" 
                          : "text-muted-foreground border-transparent hover:bg-muted hover:border-border hover:text-foreground"
                      }`}
                    >
                      {item.label.toLowerCase()}
                      <span className="opacity-50">{ext}</span>
                    </a>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-foreground text-background font-mono font-medium hover:scale-105 transition-all duration-300"
                >
                  Hire_Me()
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
