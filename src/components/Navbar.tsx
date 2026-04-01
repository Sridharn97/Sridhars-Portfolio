import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Internships", href: "#internships" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
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
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Dynamic Island-style container */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          shrunk
            ? "mt-3 max-w-xl rounded-full border border-border/60 bg-background/70 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] px-3 py-1.5"
            : "mt-0 max-w-full rounded-none bg-transparent px-0 py-5"
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${
          shrunk ? "px-3" : "container mx-auto px-6"
        }`}>
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2 shrink-0">
            <div className={`relative rounded-lg border border-border flex items-center justify-center overflow-hidden group-hover:border-foreground transition-all duration-300 ${
              shrunk ? "w-7 h-7" : "w-9 h-9"
            }`}>
              <span className={`font-mono font-bold text-foreground transition-all duration-300 ${shrunk ? "text-xs" : "text-sm"}`}>SN</span>
              <div className="absolute inset-0 bg-foreground scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
              <span className={`absolute font-mono font-bold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${shrunk ? "text-xs" : "text-sm"}`}>
                SN
              </span>
            </div>
            {!shrunk && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground hidden sm:block"
              >
                PORTFOLIO
              </motion.span>
            )}
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative transition-colors duration-300 rounded-full ${
                      shrunk ? "px-3 py-1 text-[10px]" : "px-4 py-2 text-xs"
                    } font-medium tracking-[0.15em] uppercase ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-0 rounded-full bg-accent border border-border/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-2 shrink-0">
            {!shrunk && (
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
            )}
            {shrunk && (
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center w-7 h-7 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUpRight size={12} />
              </a>
            )}

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden rounded-full border border-border flex items-center justify-center text-foreground hover:border-foreground transition-all duration-300 ${
                shrunk ? "w-8 h-8" : "w-10 h-10"
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
                  {mobileOpen ? <X size={shrunk ? 14 : 18} /> : <Menu size={shrunk ? 14 : 18} />}
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
            className="md:hidden fixed inset-0 top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-2xl z-[-1]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-3xl font-bold tracking-tight py-3 transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="font-mono text-xs text-muted-foreground mr-3">
                        0{i + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground font-medium tracking-[0.15em] text-sm uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                >
                  Hire Me
                  <ArrowUpRight size={16} />
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
