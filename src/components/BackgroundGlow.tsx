import { useEffect, useRef } from "react";

const BackgroundGlow = () => {
    const glowRef = useRef<HTMLDivElement>(null);
    const spotRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const target = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        /* ── Grid dot canvas ── */
        const canvas = gridRef.current;
        const glow = glowRef.current;
        const spot = spotRef.current;
        if (!canvas || !glow || !spot) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const GRID = 36; // dot spacing
        let cols = 0;
        let rows = 0;
        let dots: { x: number; y: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cols = Math.ceil(window.innerWidth / GRID) + 1;
            rows = Math.ceil(window.innerHeight / GRID) + 1;
            dots = [];
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    dots.push({ x: c * GRID, y: r * GRID });
                }
            }
        };
        resize();
        window.addEventListener("resize", resize);

        /* ── Mouse tracking ── */
        const onMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMove);

        /* ── Animation loop ── */
        const REACH = 180; // px radius grid dots light up
        const loop = () => {
            // Lerp mouse position for smooth lag
            mouse.current.x += (target.current.x - mouse.current.x) * 0.08;
            mouse.current.y += (target.current.y - mouse.current.y) * 0.08;

            const mx = mouse.current.x;
            const my = mouse.current.y;

            // Move glow divs
            if (glow) {
                glow.style.transform = `translate(${mx - 400}px, ${my - 400}px)`;
            }
            if (spot) {
                spot.style.transform = `translate(${mx - 150}px, ${my - 150}px)`;
            }

            // Draw grid dots
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const d of dots) {
                const dx = d.x - mx;
                const dy = d.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > REACH + 20) {
                    // Draw faint base dot always
                    ctx.beginPath();
                    ctx.arc(d.x, d.y, 0.8, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255,255,255,0.04)";
                    ctx.fill();
                    continue;
                }
                const t = Math.max(0, 1 - dist / REACH);
                const eased = t * t * (3 - 2 * t); // smoothstep

                // Dot size: grows near cursor
                const size = 0.8 + eased * 2.2;
                // Opacity: brightens near cursor
                const alpha = 0.04 + eased * 0.55;

                ctx.beginPath();
                ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx.fill();

            }

            rafRef.current = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <>
            {/* Large outer ambient glow — very soft */}
            <div
                ref={glowRef}
                className="fixed top-0 left-0 pointer-events-none z-0"
                style={{
                    width: 800,
                    height: 800,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.028) 0%, rgba(255,255,255,0.008) 40%, transparent 70%)",
                    willChange: "transform",
                    transition: "transform 0.15s ease-out",
                }}
                aria-hidden="true"
            />

            {/* Smaller, brighter inner spotlight */}
            <div
                ref={spotRef}
                className="fixed top-0 left-0 pointer-events-none z-0"
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 50%, transparent 70%)",
                    willChange: "transform",
                    transition: "transform 0.08s ease-out",
                }}
                aria-hidden="true"
            />

            {/* Interactive dot grid canvas */}
            <canvas
                ref={gridRef}
                className="fixed inset-0 pointer-events-none z-0"
                aria-hidden="true"
            />
        </>
    );
};

export default BackgroundGlow;
