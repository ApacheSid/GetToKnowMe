import { useState } from "react";
import { z } from "zod";
import { FiDownload, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/content/portfolio";
import { Section, Reveal } from "./Section";

/** Client-side validation. Wire the submit handler to your form backend. */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    // TODO: connect to your email service / form endpoint. Fallback: mailto.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${result.data.name}`,
    )}&body=${encodeURIComponent(`${result.data.message}\n\n— ${result.data.email}`)}`;
  };

  const field =
    "mt-2 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-ring/50 focus:outline-none";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="gradient-text">solid</span>
        </>
      }
      description="Open to senior and lead engineering roles, plus enterprise consulting engagements."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass rounded-3xl p-6 sm:p-8">
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                maxLength={100}
                autoComplete="name"
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={field}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                maxLength={255}
                autoComplete="email"
                placeholder="jane@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={field}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell me about the role or project…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${field} resize-y`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <FiSend aria-hidden /> Send message
            </button>
            <p aria-live="polite" className="text-xs text-muted-foreground">
              {sent ? "Opening your email client…" : ""}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="glass hover-lift rounded-3xl p-6 sm:p-7">
            <h3 className="font-display text-sm tracking-[0.16em] text-muted-foreground uppercase">
              Direct
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${profile.email}`} className="hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <FiMapPin className="shrink-0 text-primary" aria-hidden />
                {profile.location}
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { href: profile.github, label: "GitHub profile", Icon: FaGithub },
                { href: profile.linkedin, label: "LinkedIn profile", Icon: FaLinkedinIn },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-foreground"
                >
                  <Icon size={18} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="glass hover-lift flex items-center justify-between rounded-3xl p-6 sm:p-7"
          >
            <span>
              <span className="block font-display text-base font-semibold">
                Download résumé
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                PDF · full experience history
              </span>
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-brand text-primary-foreground">
              <FiDownload size={18} aria-hidden />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
