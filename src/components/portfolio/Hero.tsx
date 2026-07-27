import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile, typingPhrases } from "@/content/portfolio";
import { TypingText } from "./TypingText";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section
      id="hero"
      className="aurora relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <ParticleField />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
          Available for senior engineering roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(2.5rem,8vw,5.25rem)] leading-[0.98] font-semibold"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-5 font-display text-lg font-medium text-foreground/90 sm:text-2xl"
        >
          <TypingText phrases={typingPhrases} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-3 max-w-2xl font-mono text-xs tracking-wide text-muted-foreground sm:text-sm"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            <FiDownload aria-hidden /> Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <FiMail aria-hidden /> Contact Me
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center gap-3"
        >
          {[
            { href: profile.github, label: "GitHub profile", Icon: FaGithub },
            { href: profile.linkedin, label: "LinkedIn profile", Icon: FaLinkedinIn },
            { href: `mailto:${profile.email}`, label: "Send an email", Icon: FiMail },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-foreground"
              >
                <Icon size={18} aria-hidden />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2.2 } }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:block"
      >
        <FiArrowDown size={22} aria-hidden />
      </motion.a>
    </section>
  );
}
