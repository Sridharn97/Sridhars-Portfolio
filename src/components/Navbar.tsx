import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Terminal, Cpu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", code: "01" },
  { label: "About", href: "#about", code: "02" },
  { label: "Skills", href: "#skills", code: "03" },
  { label: "Internships", href: "#internships", code: "04" },
  { label: "Projects", href: "#projects", code: "05" },
  { label: "Certifications", href: "#certifications", code: "06" },
  { label: "Contact", href: "#contact", code: "07" },
];

export const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShrunk(latest > 60);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px" }
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
      {/* Solid Dark 3D Toolbar Container (NO GLASSMORPHISM) */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        className={`mx-auto transition-all duration-500 ease-custom-spring pointer-events-auto ${
          shrunk
            ? "mt-4 max-w-fit rounded-2xl solid-card px-4 py-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            : "mt-0 max-w-full rounded-none bg-[#07090e] border-b border-white/10 px-0 py-4 shadow-xl"
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${
          shrunk ? "gap-6" : "container mx-auto px-8"
        }`}>
          
          {/* Logo with System Marker */}
          <a href="#home" className="group flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
              <Cpu size={18} className="animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-black tracking-tight text-white text-base flex items-center">
                SRIDHAR<span className="text-cyan-400 font-bold ml-1">.N</span>
              </span>
              <span className="text-[9px] font-mono text-cyan-400/70 tracking-widest -mt-1 uppercase">
                SYS.01 // CORE
              </span>
            </div>
          </a>

          {/* Desktop Nav with 3D Moving Metallic Indicator */}
          <ul className="hidden xl:flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-300 z-10 ${
                      isActive
                        ? "text-cyan-300 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="text-[9px] opacity-50 font-mono">{item.code}</span>
                    <span>{item.label}</span>
                  </a>

                  {/* 3D Moving Active Indicator Block */}
                  {isActive && (
                    <motion.div
                      layoutId="active-3d-nav-indicator"
                      className="absolute inset-0 rounded-lg bg-cyan-500/15 border border-cyan-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_15px_rgba(0,240,255,0.2)] z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Action Button (3D Button Style) + Theme Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle />

            <a
              href="#contact"
              className="btn-3d-primary hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-wider uppercase"
            >
              <Terminal size={15} />
              <span>EXECUTE_CONTACT()</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden fixed inset-0 top-16 bg-slate-950 border-t border-white/10 p-6 z-40 pointer-events-auto flex flex-col justify-center gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="btn-3d-secondary py-3.5 px-6 font-mono text-sm tracking-widest flex items-center justify-between"
              >
                <span className="text-cyan-400 font-bold">{item.code} //</span>
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
