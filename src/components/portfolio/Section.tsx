import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Shared animated section shell: consistent spacing, heading and reveal. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand" aria-hidden />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

/** Fade-and-rise reveal used across cards, lists and timeline entries. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
