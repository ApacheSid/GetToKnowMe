import { skillGroups } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title={
        <>
          The stack I <span className="gradient-text">ship with</span>
        </>
      }
      description="Day-to-day tooling across backend, frontend, cloud and delivery — grouped the way I actually use it."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.06}
            className="glass hover-lift h-full rounded-3xl p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">{group.category}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(group.skills.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
