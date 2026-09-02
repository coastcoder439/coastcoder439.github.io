'use client';

import { motion, useReducedMotion } from 'framer-motion';

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

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[68ch]"
    >
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        <span className="text-foreground/40">{nummer}</span>
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.02] tracking-tighter text-balance">
        {headline}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-foreground/75">{copy}</p>
    </motion.header>
  );
}
