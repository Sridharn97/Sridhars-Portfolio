import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    type: "star" | "dot" | "line";
    length?: number;
    angle?: number;
}

const COLORS = [
    "255,255,255",
    "220,220,220",
    "180,180,180",
    "255,255,255",
];

function createSparkle(x: number, y: number, burst = false): Particle[] {
    const count = burst ? 18 : 3;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = burst
            ? 1.5 + Math.random() * 4.5
            : 0.4 + Math.random() * 1.8;
        const type = burst
            ? (["star", "dot", "line"] as const)[Math.floor(Math.random() * 3)]
            : (["star", "dot"] as const)[Math.floor(Math.random() * 2)];

        particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - (burst ? Math.random() * 2 : 0),
            alpha: burst ? 1 : 0.7 + Math.random() * 0.3,
            size: burst ? 1.5 + Math.random() * 3 : 0.8 + Math.random() * 1.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.3,
            type,
            length: 4 + Math.random() * 8,
            angle,
        });
    }
    return particles;
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, alpha: number) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = `rgba(${color},${alpha})`;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    // 4-point star
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const inner = size * 0.35;
        const outer = size;
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
    }
    ctx.stroke();
    // Center dot
    ctx.fillStyle = `rgba(${color},${alpha})`;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawLine(ctx: CanvasRenderingContext2D, x: number, y: number, length: number, angle: number, alpha: number) {
    const color = COLORS[0];
    ctx.save();
    ctx.globalAlpha = alpha * 0.6;
    ctx.strokeStyle = `rgba(${color},1)`;
    ctx.lineWidth = 0.7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
    ctx.restore();
}

const SparkleCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
    const rafRef = useRef<number>(0);
    const lastSpawnRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Skip on mobile
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouseMove = (e: MouseEvent) => {
            const now = performance.now();
            mouseRef.current.prevX = mouseRef.current.x;
            mouseRef.current.prevY = mouseRef.current.y;
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;

            // Only spawn if mouse moved enough and enough time passed
            const dx = mouseRef.current.x - mouseRef.current.prevX;
            const dy = mouseRef.current.y - mouseRef.current.prevY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 8 && now - lastSpawnRef.current > 30) {
                lastSpawnRef.current = now;
                particlesRef.current.push(
                    ...createSparkle(e.clientX, e.clientY, false)
                );
            }
        };

        const onClick = (e: MouseEvent) => {
            particlesRef.current.push(...createSparkle(e.clientX, e.clientY, true));
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("click", onClick);

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.01);

            for (const p of particlesRef.current) {
                // Physics
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.04; // subtle gravity
                p.vx *= 0.96;
                p.vy *= 0.96;
                p.alpha *= 0.88;
                p.rotation += p.rotationSpeed;

                if (p.type === "star") {
                    drawStar(ctx, p.x, p.y, p.size, p.rotation, p.alpha);
                } else if (p.type === "line") {
                    drawLine(ctx, p.x, p.y, p.length ?? 6, p.angle ?? 0, p.alpha);
                } else {
                    // dot
                    ctx.save();
                    ctx.globalAlpha = p.alpha;
                    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }

            rafRef.current = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9998]"
            aria-hidden="true"
        />
    );
};

export default SparkleCanvas;
