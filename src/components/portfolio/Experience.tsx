import { experience } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A decade of <span className="gradient-text">delivery</span>
        </>
      }
      description="Roles listed most recent first. Replace these entries with your resume details in src/content/portfolio.ts."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((item, i) => (
          <li key={item.role + item.period} className="relative">
            <span
              aria-hidden
              className="absolute top-8 -left-[1.9rem] h-3 w-3 rounded-full gradient-brand ring-4 ring-background sm:-left-[2.9rem]"
            />
            <Reveal delay={i * 0.06} className="glass hover-lift rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{item.role}</h3>
                <span className="font-mono text-xs tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary">{item.company}</p>
              <p className="text-xs text-muted-foreground">{item.location}</p>

              <ul className="mt-5 space-y-2.5">
                {item.points.map((p) => (
                  <li
                    key={p.slice(0, 20)}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
