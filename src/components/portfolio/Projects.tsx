import { projects } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

const detailRows = [
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "outcome", label: "Outcome" },
] as const;

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={
        <>
          Work that moved the <span className="gradient-text">business</span>
        </>
      }
      description="Representative engagements. Swap the descriptions and metrics for your own case studies."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 2) * 0.08}
            className="glass hover-lift group flex h-full flex-col overflow-hidden rounded-3xl"
          >
            {/* Visual placeholder — drop a real screenshot in /public and swap for <img>. */}
            <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-secondary/40">
              <div className="absolute inset-0 opacity-70 gradient-brand mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />
              <span className="absolute bottom-4 left-5 font-mono text-xs tracking-[0.18em] text-foreground/85 uppercase">
                {project.tagline}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <dl className="mt-5 space-y-3 border-t border-border pt-5">
                {detailRows.map(({ key, label }) => (
                  <div key={key}>
                    <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-primary uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
