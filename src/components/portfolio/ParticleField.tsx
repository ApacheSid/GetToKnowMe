import { useEffect, useRef } from "react";

/**
 * Subtle canvas particle field with connecting lines.
 * Respects prefers-reduced-motion and pauses when off-screen.
 */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const count = window.innerWidth < 768 ? 34 : 70;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 1.6 + 0.6,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        if (!reduced) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > 1) d.vx *= -1;
          if (d.y < 0 || d.y > 1) d.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(d.x * width, d.y * height, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150, 180, 255, 0.55)";
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = (dots[i].x - dots[j].x) * width;
          const dy = (dots[i].y - dots[j].y) * height;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x * width, dots[i].y * height);
            ctx.lineTo(dots[j].x * width, dots[j].y * height);
            ctx.strokeStyle = `rgba(130, 150, 255, ${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      frame = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
