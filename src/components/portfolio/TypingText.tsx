import { useEffect, useState } from "react";

/**
 * Lightweight typing effect (no dependency). Cycles through phrases,
 * typing and deleting with a blinking caret.
 */
export function TypingText({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
          return;
        }
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      },
      done ? 1800 : deleting ? 35 : 65,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className}>
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span
          className="ml-0.5 inline-block w-[2px] translate-y-[2px] self-stretch bg-primary"
          style={{ height: "1em", animation: "caret-blink 1s steps(1) infinite" }}
        />
      </span>
    </span>
  );
}
