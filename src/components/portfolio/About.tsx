import { FiCheck } from "react-icons/fi";
import { about } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Enterprise software, <span className="gradient-text">built to last</span>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="glass rounded-3xl p-7 sm:p-9">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass hover-lift rounded-3xl p-7 sm:p-8">
          <h3 className="font-display text-sm tracking-[0.16em] text-muted-foreground uppercase">
            At a glance
          </h3>
          <ul className="mt-5 space-y-4">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-brand text-primary-foreground">
                  <FiCheck size={12} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
