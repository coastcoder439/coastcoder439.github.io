'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Abschnitts-Kopf mit Template-Anmutung: Glanz-Headline (text-shiny) und
// gestaffelter Reveal wie im Hero.
export function AbschnittKopf({
  nummer,
  eyebrow,
  headline,
  copy,
}: {
  nummer: string;
  eyebrow: string;
  headline: string;
  copy: string;
}) {
  const reduceMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-90px' },
    transition: { duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <header className="max-w-[68ch]">
      <motion.p
        {...reveal(0)}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
      >
        <span className="text-foreground/40">{nummer}</span>
        {eyebrow}
      </motion.p>
      <motion.h2
        {...reveal(0.08)}
        className="text-shiny mt-5 text-[clamp(2rem,5.5vw,3.75rem)] font-black leading-[0.98] tracking-tighter text-balance"
      >
        {headline}
      </motion.h2>
      <motion.p
        {...reveal(0.16)}
        className="mt-6 text-lg leading-relaxed text-foreground/75"
      >
        {copy}
      </motion.p>
    </header>
  );
}
