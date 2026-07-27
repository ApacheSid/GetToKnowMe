import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/content/portfolio";

/** Brief branded loading curtain shown on first paint. */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-semibold"
            >
              <span className="gradient-text">{profile.name.split(" ")[0]}</span>
              <span>.dev</span>
            </motion.p>
            <div className="mx-auto mt-5 h-[3px] w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full w-full gradient-brand"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
