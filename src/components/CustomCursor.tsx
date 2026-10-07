import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"project" | "button" | "image" | "cert" | "default" | null>(null);
  const [cursorText, setCursorText] = useState<string>("");

  // Position of core dot (instant tracking)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Position of trailing ring (spring physics)
  const ringX = useSpring(dotX, { stiffness: 240, damping: 22 });
  const ringY = useSpring(dotY, { stiffness: 240, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const projectEl = target.closest("[data-cursor='project']") || target.closest(".project-card-3d");
      const buttonEl = target.closest("button") || target.closest(".btn-3d-primary") || target.closest(".btn-3d-secondary") || target.closest("a");
      const certEl = target.closest("[data-cursor='cert']") || target.closest(".cert-vault-card");
      const imageEl = target.closest("img");

      if (projectEl) {
        setHoverType("project");
        setCursorText("VIEW PROJECT");
      } else if (certEl) {
        setHoverType("cert");
        setCursorText("VERIFY");
      } else if (buttonEl) {
        setHoverType("button");
        setCursorText("EXPLORE →");
      } else if (imageEl) {
        setHoverType("image");
        setCursorText("OPEN");
      } else {
        setHoverType(null);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible, dotX, dotY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isHovered = !!hoverType;

  return (
    <>
      {/* Central Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 pointer-events-none z-[9999] shadow-[0_0_10px_#00f0ff]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Trailing 3D Outer Ring with Contextual Text */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center font-mono font-bold text-[9px] tracking-widest text-cyan-300 border border-cyan-400/40 bg-slate-950/80 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (hoverType === "project" ? 110 : 90) : 34,
          height: isHovered ? (hoverType === "project" ? 110 : 90) : 34,
          borderColor: isHovered ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 255, 255, 0.2)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center px-2 select-none uppercase font-bold text-[10px] text-cyan-300 whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
