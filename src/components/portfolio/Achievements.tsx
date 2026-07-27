import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { achievements } from "@/content/portfolio";
import { Reveal } from "./Section";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold sm:text-5xl">
      <span className="gradient-text">
        {display}
        {suffix}
      </span>
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative py-16" aria-label="Achievements">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="glass rounded-3xl px-6 py-10 sm:px-10">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.label} className="text-center">
                <dd>
                  <Counter value={a.value} suffix={a.suffix} />
                </dd>
                <dt className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase sm:text-sm">
                  {a.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
