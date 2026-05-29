import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  // Position of the core dot (instant tracking)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Position of the outer ring (spring physics for lag effect)
  const ringX = useSpring(dotX, { stiffness: 220, damping: 24 });
  const ringY = useSpring(dotY, { stiffness: 220, damping: 24 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);

    // Track when hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".clickable") ||
        target.closest(".magnetic-hover");

      setHovered(!!isClickable);
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

  return (
    <>
      {/* Inner solid core dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Outer spring trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 56 : 30,
          height: hovered ? 56 : 30,
          borderColor: hovered 
            ? (resolvedTheme === "dark" ? "hsl(190 90% 50%)" : "hsl(240 5.9% 10%)") 
            : (resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)"),
          backgroundColor: hovered 
            ? (resolvedTheme === "dark" ? "rgba(190, 90, 50, 0.05)" : "rgba(0, 0, 0, 0.03)") 
            : "rgba(0, 0, 0, 0)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
