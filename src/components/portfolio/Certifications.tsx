import { FiAward, FiClock } from "react-icons/fi";
import { certifications } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Verified <span className="gradient-text">cloud credentials</span>
        </>
      }
      description="Professional certifications and technical trainings completed."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const earned = cert.status === "earned";
          const Icon = earned ? FiAward : FiClock;
          return (
            <Reveal
              key={cert.name}
              delay={i * 0.06}
              className="glass hover-lift h-full rounded-3xl p-6"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-2xl ${
                  earned
                    ? "gradient-brand text-primary-foreground"
                    : "border border-border bg-secondary/50 text-muted-foreground"
                }`}
              >
                <Icon size={19} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-base leading-snug font-semibold">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-4 font-mono text-xs tracking-[0.16em] text-primary uppercase">
                {earned ? cert.year : "In progress"}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
